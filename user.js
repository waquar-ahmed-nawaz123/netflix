import { user } from "../models/userModel.js";
export const register=async(req,res)=>{
    try{
      const {fullName,email,password} = req.body;
      if(!fullName || !email || !password){
        return res.status(401).json({
            message: "invalid date",
            success: false
        })
      }
      const user = await user.findone({email});
      if(user){
        return res.status(401).json({
            message:"This email is already exist!",
            success:false
        })
      }
      await user.create({
        fullName,
        email,
        password
      });
      return res.status(200).json({
         message: "Account created successfully!"
      })
    }
    catch (error) {
        console.log(error);
    }
}