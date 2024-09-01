import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_FINDER"
    }).then(()=>{
        console.log("Connected to Mongooes")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}
