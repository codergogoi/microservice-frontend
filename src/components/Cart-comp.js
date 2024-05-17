import React, { useState, useEffect } from "react";

export const CartItem = (props) => {

    const { item, cart, onAdd, onRemove} = props;

    const { _id } = item.product;

 
     const [currentUnit,setCurrentUnit] = useState(0)
    
    useEffect(() => {
        if(Array.isArray(cart) && cart.length){   
            if(item !== undefined){
                const exist = cart.filter(({ product }, unit) => product._id == _id);
                if(exist.length){
                    setCurrentUnit(exist[0].unit)
                }
            }
        }

    },[cart])
     
    const addCart = () => {

        const newUnit = currentUnit + 1;

        setCurrentUnit(newUnit);
        setTimeout(() => {
            onAdd({_id: _id, qty: newUnit});
        },0);
    }

    const removeCart = () => {
        if(item !== undefined){
                const newUnit = currentUnit - 1;
                setCurrentUnit(newUnit);
                setTimeout(() => {
                    if(newUnit > 0){
                        onAdd({_id: _id, qty: newUnit});
                    }else{
                        onRemove({_id})
                    }
                }, 0);

        }
    }

    if(item){

        const { product, unit } = item;
        
        if(product){
          
           let { name, desc, type, price, banner } = product;

            return (
                <div className="row mb-2 p-1 border rounded">
                    <div className="col-2">
                        <img variant="top" style={{ width: '6rem'}} src={banner} />
                    </div>
                    <div className="col p-2">
                        <span className="font-weight-bold">{name}</span>
                        <p className="text-secondary" style={{ fontSize: '0.9rem'}}>{desc}</p>
                        <span>₹{price}</span>
                    </div>
                    <div className="col-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <button className="btn bg-warning"
                                onClick={() => removeCart()}
                            >
                                <i className="fas fa-minus"></i>
                            </button>
                            <span className="m-3" style={{ fontSize: '2.0rem'}}>{currentUnit}</span>
                            <button className="btn bg-warning"
                                onClick={() => addCart()}
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                    </div>
                </div>
            );

        }else{
            return <h1>Not found! { JSON.stringify(item)}</h1>
        }
    }else{
        return <h1>Not found!</h1>
    }

}