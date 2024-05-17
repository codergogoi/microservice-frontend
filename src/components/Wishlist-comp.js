
export const WishItem = ({ item, onTapRemove }) => {

    const { _id, name, desc, type, unit, price, banner } = item;


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
            <div className="col-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn bg-warning"
                        onClick={() => onTapRemove(_id)}
                    >
                        <i className="fas fa-trash mr-2"></i>
                        Remove
                    </button>
                    
            </div>
        </div>
    );

}