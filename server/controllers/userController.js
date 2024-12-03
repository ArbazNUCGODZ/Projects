const bcrypt = require('bcryptjs');
const People=require('../models/userModel.js');

const createUser=async(req,res)=>{
    const{name,email,password}=req.body;
    try {
        const hashedPassword=await bcrypt.hash(password,10)
       const newUser=await People.create({name,email,password:hashedPassword});
       res.status(201).json(newUser);
        
    } catch (error) {
        res.status(400).json({message:"error in creation"})
    }
};

const loginUser=async (req,res)=>{
     const{email,password}=req.body;
     try {

        const user = await People.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });

        res.render('home', { userName: user.name });

        
     } catch (error) {
        res.status(400).json({message:"error logging in"})
     }
}


module.exports={createUser,loginUser};