import mongoose, { Schema } from "mongoose"

const expenseSchema = new Schema (
    {
        name: String,
        amount: String,
    },
    {
        timestamps: true,
    }
)

const Expense = mongoose.models.Expense || mongoose.model("Expense", expenseSchema)

export default Expense