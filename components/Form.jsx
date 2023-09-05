const Form = () => {
  return (
    <form className="flex flex-col lg:flex-row gap-3 justify-evenly items-center w-full">
      <input
        className="rounded-lg w-full lg:basis-5/12 p-3 bg-brand-300 "         
        type="text" 
        placeholder="Item" 
      />

      <input
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