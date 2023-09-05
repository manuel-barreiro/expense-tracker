import ExpenseList from "./ExpenseList"
import Form from "./Form"
import Totalizer from "./Totalizer"
import Image from "next/image"

const MainCard = () => {
  return (
    <section className="rounded-3xl backdrop-blur shadow-2xl bg-black/50 w-full p-5 lg:p-10 flex flex-col justify-evenly gap-10 items-center">
        <div className="flex flex-col gap-4 items-center">
            <Image src={"/logo.png"} priority width={100} height={100} alt="logo" className="hover:scale-105 ease-in-out duration-300"/>
            
            <h1 className="text-brand-500 font-extrabold text-2xl">Expense Tracker</h1>
        </div>

        <Form />

        {/* <ExpenseList /> */}

        <Totalizer />
        
    </section>
  )
}

export default MainCard