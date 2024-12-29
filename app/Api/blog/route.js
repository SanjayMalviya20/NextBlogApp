// import { dbConnection } from "@/library/database/dbConntection";
import blogmodel from "@/lib/database/models/BlogModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { dbConnection } from "@/lib/database/dbConntection";

const loadDb = async () => {
    await dbConnection()
}
loadDb()


export const POST = async (req) => {
    await mongoose.connect("mongodb+srv://sanjay:sanjaymalviyamongodb@sanjay.fdp92.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const formdatas = await req.formData()
    const randomData = Date.now()
    const image = formdatas.get("image")
    const imgBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(imgBuffer)
    const path = `./public/${randomData}_${image.name}`
    await fs.writeFile(
        path,
        buffer
    )
    const imgURL = `${randomData}_${image.name}`
    const res = await blogmodel.create({
        title:`${formdatas.get("title")}`,
        desc:`${formdatas.get("desc")}`,
        categrery: formdatas.get("categrery"),
        image: imgURL,
        author: formdatas.get("author"),
        // authorImg: formdatas.get("authorimg"),
    })
    return NextResponse.json({msg:"ok",res:res})
}


