const Totalizer = ({ total }) => {
  return (
    <section className="flex gap-2 items-center w-full p-3 rounded-md border font-extrabold text-lg uppercase text-brand-200">
      <div className="basis-10/12 flex justify-evenly gap-2"> 
        <span className="basis-5/12">Total</span>
        <span className="basis-5/12">$ {total}</span>
      </div>
    </section>
  )
}

export default Totalizer