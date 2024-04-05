const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, // lowercase:true
    },
    password: {
      type: String, // required:true
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
    },
    salt: {
      type: String, // required:true
    },
  },
  { timestamps: true }
);
// userSchema.virtual('password').set(function(password){
//     this.hash_password=bcrypt.hashSync(password,10)
// })
// userSchema.methods={
//     authenticate:async function(password)
//     {
//         return await bcrypt.compare(password,this.hash_password)
//     }
// }
module.exports = mongoose.model("User", userSchema);
