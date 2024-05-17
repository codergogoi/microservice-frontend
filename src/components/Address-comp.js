import React from 'react';
 

export const AddressComponent = ({ address }) => {

    const addressCard = ({street,postalCode,city,country}) => {
        return <div className="col-sm col-lg-4 col-mid-3 bg-white p-2 rounded">
                  <div>
                    <span class="badge badge-warning">Default Address</span>
                    <p>{street}</p>
                    <span className="">{postalCode},{city},{country}</span>
                  </div>
                  <div className="float-right">
                    <button type="button" class="btn btn-info btn-sm mr-2">
                      <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" class="btn btn-info btn-sm mr-2">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
          </div>      
      }
  
      const listOfAddress = () => {
          if(Array.isArray(address)){
            return address.map((item) => {
                return addressCard(item)
            });
          }else{
            return <p> Address Not available!</p>
          }
      }

    return <div className="d-flex flex-row flex-nowrap overflow-auto">
            {listOfAddress()}
    </div>


}