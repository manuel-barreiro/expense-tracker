import DeleteButton from "./DeleteButton"
import Totalizer from "./Totalizer"


async function getExpenses() {

  const apiUrl = process.env.API_URL

  try {
      const res = await fetch(`${apiUrl}/api/expenses`, {
          cache: "no-store"
      })

      if (!res.ok) {
          throw new Error("Failed to fetch expenses.")
      }

      return res.json()
  } catch (error) {
      console.log("Error loading expenses:", error)
  }
}

const ExpenseList = async () => {

  const { expenses } = await getExpenses();
  
  const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
  
  return (
    <>
    <section className="w-full text-brand-200">
      <ul className="flex flex-col gap-4 justify-evenly">
        {
          expenses.map((expense) => (
            <li key={expense._id} className="flex gap-2 items-center w-full p-3 rounded-md font-bold bg-brand-950 border border-brand-700 hover:border-brand-100 ease-in-out duration-300">
               <div className="basis-10/12 flex justify-evenly gap-2">
                  <span className="capitalize basis-5/12">{expense.name}</span>
                  <span className="basis-5/12">$ {expense.amount}</span>
               </div>
                <DeleteButton id={expense._id}/>
            </li>
            )
          )
        }
      </ul>
    </section>

    <Totalizer total={total} />

    </>
  )
}

export default ExpenseList