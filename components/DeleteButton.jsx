'use client'
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"


const DeleteButton = ({ id }) => {

  const router = useRouter();

  async function deleteExpense() { 
      console.log(id)
      const res = await fetch(`/api/expenses/${id}`, {
        method: "DELETE",
      })
  
      if (res.ok) {
        router.refresh({scroll: false});
        } else {
        throw new Error("Failed to delete expense.")
        }
  }

  return (
    <button  onClick={deleteExpense} className= "basis-2/12 text-brand-100 hover:text-brand-400 cursor-pointer border-l-2 border-brand-900">
        <HiOutlineTrash size={24} className="mx-auto" />
    </button>

  )
}

export default DeleteButton