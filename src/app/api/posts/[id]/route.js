import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {

    const { id } = params
    
    try{
        await connect();
        const singlePost = await Post.findById(id);
        return new NextResponse(JSON.stringify(singlePost), {status: 200})

    } catch(error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {

    const { id } = params
    
    try{
        await connect();
        
        await Post.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted", {status: 200})

    } catch(error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}