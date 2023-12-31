'use client';
import { useState } from 'react'
import { useRouter } from "next/navigation";

const Form = () => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const router = useRouter();

  async function handleSubmit(e) {
    setName('')
    setAmount('')

    e.preventDefault();
    

    if (!name || !amount){
      alert("Name and Amount are required.");
      return;
    }

    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, amount })
      })

      if (res.ok) {
        router.refresh({scroll: false});
      } else {
        throw new Error("Failed to create task.")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-3 justify-evenly items-center w-full">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="rounded-lg w-full lg:basis-5/12 p-3 bg-brand-300 "         
        type="text" 
        placeholder="Item" 
      />

      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className="rounded-lg w-full lg:basis-5/12 p-3 bg-brand-300 "
        type="number" 
        placeholder="Amount" 
      />

      <button type="submit" className="rounded-lg w-full lg:basis-2/12 p-3 text-brand-200 font-bold bg-brand-950 border border-brand-700 hover:border-brand-100 ease-in-out duration-300">
        Add item
      </button>
    </form>
  )
}

export default Form