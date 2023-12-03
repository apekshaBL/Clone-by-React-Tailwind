function Page3(){
    return(
        <section className="p-6  my-9 ">
             <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Testimonial</h2>
             <div className="my-12 ml-64">
            <div className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400
                before:content-before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl
                before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2">
                Acme has always been there for me. Their Explorer 
                rocket<br/>arrived in a wooden crate as expected. Lifelong<br/> 
                customer! A++ shopping experience!
                </p>
             </div>
             <div className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400
                before:content-['\201C']before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl
                before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
                after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after-right-0 after-text
                -9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2">
                The Acme Adventurer Rocket has thwarted my Illudium<br/> Q-36 
                Explosive Space Modulator on several occassions.<br/>
                <i>This makes me very, very angry!</i> Nevertheless, K-9 
                and I<br/> have awarded Acme the Martian contract for space<br/> exploration 
                rockets based on Acme's quality and sturdy<br/> designs.
                </p>
            </div>
            <div className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className=" text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400
                before:content-before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl
                before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2">
                I knew I not only wanted — I needed — Acme's Infinity<br/> 
                Rocket for my mission in space. Acme delievered in one<br/> day! 
                Nothing says Take me to your leader like Acme's<br/> Infinity Rocket! 💯
                </p>
            </div>
            </div>
            <hr className="mx-auto bg-black dark:bg-white w-96"/>
        </section>

    )
}
export default Page3;