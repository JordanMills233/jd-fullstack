import connectMongoDB from "@/lib/mongodb";
import Blog from "../../../models/blog";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description, data } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, description, data });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}
