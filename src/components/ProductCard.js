import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {

    const {_id,banner, available, price, name, desc, type} = item;

        return <Link to={"/details/"+_id}
        className="col" style={{ textDecoration: 'none'}}>
                <div className="bg-white" style={{ width: '12rem', height: '22rem', flexDirection: 'column', justifyContent: 'space-around',  display: 'flex', paddingTop: '1rem', paddingBottom: '0.5rem', borderRadius: 7  }}>
                  <img variant="top" style={{ width: '12rem'}} src={banner} />
                  <div className="col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <p className="display-5" style={{ fontSize: '1.2rem', color: '#3C3C3C'}}>{name}</p>
                    <span className="m-1"style={{ fontSize: '0.8rem'}}>{desc}</span>
                    <p className="text-secondary font-weight-bold">₹{price}</p>
                  </div>
                </div> 
          </Link>      
      }    

export { ProductCard };