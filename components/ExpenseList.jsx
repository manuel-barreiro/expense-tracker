import { HiOutlineTrash } from "react-icons/hi"

const ExpenseList = () => {

  const expenses = [ 
    { id: 1, name: 'Rent', amount: 100 }, 
    { id: 2, name: 'Groceries', amount: 100 }, 
    { id: 3, name: 'Gas', amount: 50},
    { id: 4, name: 'Food', amount: 50},
    { id: 5, name: 'Clothes', amount: 50},
    { id: 6, name: 'Entertainment', amount: 50},
  ]
  
  return (
    <section className="w-full text-brand-200">
      <ul className="flex flex-col gap-4 justify-evenly">
        {
          expenses.map((expense) => (
            <li key={expense.id} className="flex gap-2 items-center w-full p-3 rounded-md border border-brand-300">
               <div className="basis-10/12 flex justify-evenly gap-2">
                  <span className="capitalize basis-5/12">{expense.name}</span>
                  <span className="basis-5/12">$ {expense.amount}</span>
               </div>
                <HiOutlineTrash size={24} className= "basis-2/12 text-brand-100 hover:text-brand-400 cursor-pointer border-l-2 border-brand-900" />
            </li>
            )
          )
        }
      </ul>
    </section>
  )
}

export default ExpenseList