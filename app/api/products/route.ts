import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/lib/models/Product";
import Collection from "@/lib/models/Collection";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized ", { status: 401 });
    }
    await connectToDB();

    const { title, description, media, collections, category, price } =
      await req.json();

    if (!title || !description || !media || !category || !price) {
      return new NextResponse("Not enough data to create a product", {
        status: 400,
      });
    }

    const newProduct = await Product.create({
      title,
      description,
      media,
      category,
      collections,
      price,
    });

    await newProduct.save();

    return NextResponse.json(newProduct, { status: 200 });
  } catch (err) {
    console.log("[Products in Post in route : ", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
