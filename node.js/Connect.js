const{MongoClient}=require('mongodb')
const url='mongodb://0.0.0.0:27017'
const client=new  MongoClient(url)
async function getdata()
{
    let output= await client.connect()
    let db=output.db('emp')
    let collection=db.collection(db)
    let result= await collection.find().toArray()
    console.log(result)
}
getdata()