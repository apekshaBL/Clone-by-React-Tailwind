import Cards from './Cards.jsx'
function Page2(){
    return(
        <>
        <section className="p-6  my-12  ">
           <h2 className="text-center text-4xl  font-bold sm:text-5xl mb-6 text-slate-900 dark:text-white">Our Rockets</h2>
           <div className="flex justify-center">
           <Cards  title="Explorer" tool="$" image="src/images/explorer.png"/>
           <Cards  title="Adventurer " tool="$$" image="src/images/adventure.png"/>
           <Cards title="Infinity" tool="$$$" image="src/images/infinity.png"/>
           </div>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-96"/>
        </>
    )
}
export default Page2