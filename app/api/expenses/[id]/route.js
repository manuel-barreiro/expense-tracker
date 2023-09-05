import connectMongoDB from "@/utils/connectMongoDB";
import Expense from "@/models/expense";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    await connectMongoDB();
    await Expense.findByIdAndDelete(params.id);
    return NextResponse.json( { message: "Expense Deleted" }, { status: 200 } );
}