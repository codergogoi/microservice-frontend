
export const OrderItem = ({ item, onTapViewMore }) => {

    const { _id, orderId, amount, status, items } = item;

   

    return (
        <div className="container mb-2 p-1 border rounded">
            <div className="row">
                <div className="col">
                    <span> Order ID: {orderId}</span>
                </div>
                <div className="col-2 p-2">
                    <span>₹{amount}</span>
                </div>
            </div>
            
            <div className="row mt-3 mb-3 p-3">
                <div className="col-4 ml-auto">
                        <button className="btn bg-warning"
                            onClick={() => onTapViewMore(_id)}
                        >
                            <i className="fas fa-trash mr-2"></i>
                            View Details
                        </button>
                        
                </div>
            </div>
            
        </div>
    );

}