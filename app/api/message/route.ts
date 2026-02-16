import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const project = await Message.create(body);

  return NextResponse.json(project);
}

export async function GET() {
  await connectDB();

  const projects = await Message.find().sort({ createdAt: -1 });

  return NextResponse.json(projects);
}
