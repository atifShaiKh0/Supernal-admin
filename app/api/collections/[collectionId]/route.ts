import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/mongoDB";
import Collection from "@/lib/models/Collection";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    await connectToDB();

    await Collection.findByIdAndDelete(params.collectionId);
    return new NextResponse("Collection is Deleted", { status: 200 });
  } catch (err) {
    console.log("[collectionId_Delete]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};