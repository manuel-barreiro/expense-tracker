import ExpenseList from "./ExpenseList"
import Form from "./Form"
import Image from "next/image"

const MainCard = () => {
  return (
    <section className="rounded-3xl backdrop-blur shadow-2xl bg-black/50 w-full p-5 lg:p-10 flex flex-col justify-evenly gap-10 items-center">
        <div className="flex gap-4 items-center">
            <Image src={"/logo.png"} priority width={70} height={70} alt="logo" className="hover:scale-105 ease-in-out duration-300"/>
            
            <h1 className="text-white font-extrabold text-xl md:text-3xl">Expense Tracker</h1>
        </div>

        <Form />

        <ExpenseList />
        
    </section>
  )
}

export default MainCard