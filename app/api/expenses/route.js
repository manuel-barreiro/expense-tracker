import connectMongoDB from "@/utils/connectMongoDB";
import Expense from "@/models/expense";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, amount } = await request.json();
    await connectMongoDB();
    await Expense.create( { name, amount } );
    return NextResponse.json( { message: "Expense Created" }, { status: 201 } );
}

export async function GET() {
    await connectMongoDB();
    const expenses = await Expense.find().sort( { createdAt: -1 } );
    return NextResponse.json({ expenses });
}