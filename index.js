import express from "express";

import cors from "cors"

import Conn from "./connection/Conn.js";

import bodyParser from 'body-parser'
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())




app.post("/getalltodolist",async (req, res) => {
    const {taskname,taskid} = req.body
    console.log(taskname,taskid)

   try {
    const taskdata = new todomodel({
        
        taskname:taskname,
        taskid:taskid,
        
      });
      const result = await taskdata.save();
    res.status(200).send(result)
    
   } catch (error) {
    res.status(404).send("sothing went wrong");
    console.log(error)
   } 

 
});
app.get("/getalltodolist",async (req, res) => {

    try {
        // const result = await ImageuploadModel.findOne({_id:"636a04fdd96ba8755f04495e"});
        const result = await todomodel.find()
        res.status(200).send(result) 
      } catch (error) {
        res.status(404).send("sothing went wronggg");
      }

 
});
app.put("/getalltodolist",async (req, res) => {

    try {
        //         const updatedInfo=await User.updateOne({_id:req.query.id},{$set:{is_verified:1}})
        const updatecartdata = await todomodel.updateOne(
          { taskid: req.body.id },
          {
            $set: {
                taskname: req.body.name,
              
            },
          }
        );
        res.status(200).json("update.............");
      } catch (error) {
        console.log(error);
      }

 
});
app.delete("/getalltodolist",async (req, res) => {

    try {
        const deletetodolist = await todomodel.deleteOne({ taskid: req.body.id });
        res.status(200).json("Item remove from cart succefully");
      } catch (error) {
        console.log(error);
      }
 
});

const port = process.env.PORT || 8003;
app.listen(port, () => {
    console.log(`Port Running on ${port}`);
  });





  



const toDoSchema = new mongoose.Schema({
    taskname:{type:String,require:true}, 
    taskid:{type:String,require:true},
}) 

const todomodel = new mongoose.model("todomodel",toDoSchema)
