const Category=require('../models/category')
const slugify=require('slugify')
const router = require('../routes/auth')
exports.addCategory=async(req,resp)=>{
    try {
        const { name } = req.body;
        if (!name) {
          return resp.status(401).send({ message: "Name is required" });
        }
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
          return resp.status(200).send({
            success: true,
            message: "Category Already Exisits",
          });
        }
        const category = await new Category({
          name,
          slug: slugify(name),
        }).save();
        resp.status(201).send({
          success: true,
          message: "new category created",
          category,
        });
      } catch (error) {
        console.log(error);
        resp.status(500).send({
          success: false,
          error,
          message: "Errro in Category",
        });
      }
}
exports.getCategories=async(req,resp)=>{
    try {
        const category = await Category.find({});
        resp.status(200).send({
          success: true,
          message: "All Categories List",
          category,
        });
      } catch (error) {
        console.log(error);
        resp.status(500).send({
          success: false,
          error,
          message: "Error while getting all categories",
        });
      }
}
