import { nanoid } from "nanoid";
import Job from '../models/JobModel.js'
import mongoose from "mongoose";
import {StatusCodes} from 'http-status-codes'
import { NotFoundError } from "../errors/customError.js";
// let  jobs = [
    
//    { id: nanoid() , company :'JP Morgan', role:'Font-end'},
//    { id: nanoid() , company: 'Accenture', role : 'Back-end' }
 
//          ];
    
// GET ALL JOBS 

export const getAllJobs = async (req,res)=>{
   
    const jobs =  await Job.find({createdBy : req.user.userId });
    res.status(StatusCodes.OK).json({jobs});
    }

// CREATE JOB

export const createJob = async (req,res)=>{
    //const {company , role} = req.body;
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body );
    res.status(StatusCodes.CREATED).json({job});
    }

// GET SINGLE JOB 

export const getJob = async (req,res)=>{
   
    const job = await Job.findById(req.params.id);

   

    res.status(StatusCodes.OK).json({job});
}

// EDIT / UPDATE JOB 

export const updateJob = async (req,res)=>{

    
    const updatedJob = await Job.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });
  

    res.status(StatusCodes.OK).json({msg:'Job Modified', job: updateJob});
}

// DELETE JOB 

export const deleteJob = async (req,res)=>{


    const removedJob = await Job.findByIdAndDelete(req.params.id);
  
    res.status(StatusCodes.OK).json({msg:'Job Deleted', job: removedJob});
}

