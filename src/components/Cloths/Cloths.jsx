

const Cloths = ({cloth, handleAdd}) => {
    const {image,title,price}=cloth

    return (
        <div className=' border-2 border-solid border-black p-9'>
            <img  src={image} alt="" />
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="font-bold text-red-500">Price: {price}</p>
            <button onClick={()=>handleAdd(cloth)} className="bg-green-500 p-3">Add</button>
           
        </div>
    );
};

export default Cloths;