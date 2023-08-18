import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newData: data,
  } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, description, data });
  return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}

export async function DELETE(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}
