const Product = require("../models/product.js");
const shortid = require("shortid");
const category = require("../models/category.js");
const product = require("../models/product.js")
const slugify = require("slugify");
const fs=require('fs')

exports.createProduct=async(req,resp)=>{
  try{
  const {name,price,description,slug,category,quantity}=req.fields
 const {photo}=req.files
 switch(true)
 {
  case !name:
      return resp.status(500).send({error:"Name is required"})
  case !description:
      return resp.status(500).send({error:"description is required"})
  case !price:
      return resp.status(500).send({error:"price is required"})
  case !quantity:
      return resp.status(500).send({error:"quantity is required"})
  case !category:
      return resp.status(500).send({error:"category is required"})    
  case !photo && photo.size > 10000:
      return resp.status(500).send({error:"photo is required and should be less than 1 Mb"})   
 }
 const product =new Product({...req.fields,slug:slugify(name)})
 if(photo)
 {
  product.photo.data=fs.readFileSync(photo.path)
  product.photo.contentType=photo.type
 }
 await product.save()
 resp.status(201).send({
  success:true,
  message:"Product created succesfully",
  product
 })
}catch(error){
  resp.status(500).send({
       success: false,
          error,
          message: "Error in creating product"
     })
}

}

exports.getProducts=async(req,res)=>{
  try{
    const product =await Product.find({}).select("-photo").limit(10).sort({createdAt:-1}).populate("category")
    res.status(200).send({
      success:true,
      total:product.length,
      message:"All Products",
      product
    })
  }catch(error){
    res.status(500).send({
      success:false,
      message:"Error in getting products",
      error:error.message
    })
  }
}

exports.getSingleProduct=async(req,res)=>{
  try{
    const product= await Product.findOne({slug:req.params.slug}).select("-photo").populate("category")
    res.status(200).send({
      success:true,
      message:"Single Product Fetched",
      product
    })
  }catch(error){
    res.status(500).send({
      sucess:false,
      message:"Error in gettng single Product",
      error
    })
  }
}

exports.getProductphoto=async (req,resp)=>{
  try{
      const product=await Product.findById(req.params.pid).select("photo")
      if(product.photo.data)
      {
          resp.set('Content-type',product.photo.contentType)
          return resp.status(200).send(product.photo.data)
      }
  } catch(error){
      resp.status(500).send({
          success:false,
          message:"Error getting Product Photo",
          error
      })
  }
}
exports.productDelete=async(req,res)=>{
  try{
    await Product.findByIdAndDelete(req.params.pid).select("-photo")
    res.status(200).send({
      success:false,
      message:"Product deleted successfully"
    })
  } catch(error){
    res.status(500).send({
      success:false,
      message:"Error deleting Product",
      error
    })
  }
}

exports.updateProduct =async(req, resp) => {
  try {
      const { name, description, slug, price, quantity, category } = req.fields
      const { photo } = req.files
      switch (true) {
          case !name:
              return resp.status(500).send({ error: "Name is required" })
          case !description:
              return resp.status(500).send({ error: "Description is required" })
          case !price:
              return resp.status(500).send({ error: "Price is required" })
          case !quantity:
              return resp.status(500).send({ error: "Quantity is required" })
          case !category:
              return resp.status(500).send({ error: "Category is required" })
          case !photo && photo.size > 100000:
              return resp.status(500).send({ error: "Photo is required and should be less than 1Mb" })
      }
      const product = await Product.findByIdAndUpdate(
        req.params.pid, 
        { ...req.fields, slug: slugify(name) }, 
        { new: true })
      if (photo) {
          product.photo.data = fs.readFileSync(photo.path)
          product.photo.contentType = photo.type
      }
      await product.save()
      resp.status(201).send({
          success: true,
          message: "Product upload successfully",
          product
      })
  } catch (error) {
      resp.status(500).send({
          success: false,
          message: "Error in updating Product",
          error
      })
  }
}
exports.filterProduct=async (req,resp)=>{
  try{
      const {checked,radio}=req.body
      let args={}
      if(checked.length>0) args.category=checked
      if(radio.length) args.price={$gte:radio[0],$lte:radio[1]}
      const fproducts=await Product.find(args)
      resp.status(200).send({
          success:true,
          fproducts,
      })

  }catch(error)
  {
      resp.status(400).send({
          success:false,
          message:"Error in filtering product",
          error,
      })
  }
}
exports.searchProduct=async (req,resp)=>{
  try{
      const {keyword}=req.params
      const result=await Product.find({
          $or:[
              {name:{$regex:keyword,$options:'i'}},
              {description:{$regex:keyword,$options:'i'}}
          ]
      }).select("-photo")
      resp.json(result)
  }
  catch(error)
  {
      resp.status(400).send({
          success:false,
          message:"Error in Searching product",
          error,
      })
  }
}