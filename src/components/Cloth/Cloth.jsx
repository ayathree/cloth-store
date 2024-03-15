

const Cloth = ({item, handleDelete}) => {
    const {title,price,id}=item
    return (
        <div className='grid grid-cols-3 gap-6 items-center'>
            
            
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={()=>handleDelete(id)} className='bg-slate-300 p-3'>delete</button>
          </div>
    );
};

export default Cloth;