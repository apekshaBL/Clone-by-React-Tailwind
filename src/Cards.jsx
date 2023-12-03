function Cards({title,tool,image}){
    return(
        <div className="justify-self-center ">
            <div className=" border-2 rounded-2xl border-white w-64 h-64 ml-12 mt-12 pb-5">
                  <img className=" h-28 w-28 ml-20 mt-10 " src={image} alt="" />
                  <h2 className="text-center mt-4 text-4xl">{title}</h2>
                  <h3 className="text-4xl text-center">{tool}</h3>
            </div>
        </div>
    )
}
export default Cards