
function Navbar(){
    return(
        <>
        <nav className="bg-teal-700 text-white sticky top-0 z-10">
         <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className=" text-3xl font-medium">
            <a href="#"> 🚀Achme Rockets</a>
            </h1>
            <div>
               <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                  &#9776;
               </button>
               <nav className="hidden sm:block space-x-8 text-xl "aria-label="main">
                  <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                  <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                  <a href="#contacts"className="hover:opacity-90">Contact Us</a>
               </nav>
            </div>
         </section>
    </nav>
     </>
    )
}
export default Navbar