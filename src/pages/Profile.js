import React, { useState, useEffect } from "react";
import {
  onRemoveFromWishlist,
  onViewProfile,
  onAddToCart,
  onRemoveFromCart,
  onCreateAddress,
  onPlaceOrder,
} from "../store/actions";
import { AddressComponent } from "../components/Address-comp";
import { CartItem } from "../components/Cart-comp";
import { WishItem } from "../components/Wishlist-comp";
import { OrderItem } from "../components/Order-comp";

import { useAppDispatch, useAppSelector } from "../store/hooks";

//load Shopping profile

const Profile = () => {
  const { user, wishlist, cart, orders, address } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();

  const { id, token } = user;

  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token]);

  const onAdd = ({ _id, qty }) => {
    console.log(_id, qty);

    dispatch(onAddToCart({ _id, qty: qty }));
  };

  const onRemove = ({ _id }) => {
    dispatch(onRemoveFromCart(_id));
  };

  const removeFromWishlist = (_id) => {
    dispatch(onRemoveFromWishlist(_id));
  };

  const viewCart = () => {
    if (Array.isArray(cart) && cart.length) {
      return (
        <div>
          {cart.map((item) => {
            if (item) {
              return (
                <CartItem
                  cart={cart}
                  item={item}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20rem" }}
        >
          <span className="text-secondary"> Your Cart is Empty!</span>
        </div>
      );
    }
  };

  const viewWishlist = () => {
    if (Array.isArray(wishlist) && wishlist.length) {
      return (
        <div>
          {wishlist.map((item) => {
            return <WishItem item={item} onTapRemove={removeFromWishlist} />;
          })}
        </div>
      );
    } else {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20rem" }}
        >
          <span className="text-secondary"> Your Wishlist is Empty!</span>
        </div>
      );
    }
  };

  const viewOrders = () => {
    if (Array.isArray(orders) && orders.length) {
      return (
        <div>
          {orders.map((item) => {
            return <OrderItem item={item} onTapViewMore={() => {}} />;
          })}
        </div>
      );
    } else {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20rem" }}
        >
          <span className="text-secondary"> Your Order List is Empty!</span>
        </div>
      );
    }
  };

  const onTapPlaceOrder = () => {
    // Perform Payment
    dispatch(onPlaceOrder({ txnId: "72365ffdds" }));
  };

  const viewPlaceOrder = () => {
    if (Array.isArray(cart) && cart.length) {
      let totalAmount = 0;

      cart.map(({ unit, product }) => {
        totalAmount += unit * product.price;
      });

      return (
        <div className="row bg-white" style={{ height: "5rem" }}>
          <div className="col-3">
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              Total Amount:{" "}
              <span
                className="ml-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                {totalAmount}
              </span>
            </span>
          </div>
          <div className="col-3 ml-auto">
            <button
              className="btn btn-lg - btn-danger"
              onClick={() => onTapPlaceOrder()}
            >
              <i className="fas fa-gift mr-2"></i> Place Order
            </button>
          </div>
        </div>
      );
    }
  };

  const addNewAddress = () => {
    dispatch(
      onCreateAddress({
        street,
        postalCode,
        city,
        country,
      })
    );
  };

  const handleAddress = () => {
    if (Array.isArray(address) && address.length) {
      return (
        <div className="row">
          <div className="col-12">
            <h1> Shopping Profile </h1>
          </div>
          <div className="col" style={{ height: "15rem" }}>
            <label>Your Delivery Address </label>
            <AddressComponent address={address} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <form className="m-2 bg-white p-2 mt-3 ml-3 rounded">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Street</label>
                <input
                  type="text"
                  onChange={(e) => setStreet(e.target.value)}
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  class="form-control"
                  id="inputCity"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputCity">State</label>
                <input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  class="form-control"
                  id="inputCity"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Postal Code</label>
                <input
                  type="text"
                  onChange={(e) => setPostalCode(e.target.value)}
                  class="form-control"
                  id="inputZip"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Country</label>
                <input
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  class="form-control"
                  id="inputZip"
                />
              </div>
            </div>
            <div className="row">
              <button
                class="btn btn-warning ml-auto mr-4"
                onClick={() => addNewAddress()}
                type="button"
              >
                Save Address
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  const shoppingProfile = () => {
    return (
      <div className="container">
        {handleAddress()}

        <div
          className="row bg-white"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
          }}
        >
          <div>
            <p
              className="ml-3 my-2 mb-5"
              style={{ color: "#4179CF", fontSize: "2rem" }}
            >
              {" "}
              Shopping Cart
            </p>
          </div>
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-link active"
                  style={{ color: "#3680B4" }}
                  id="nav-cart-tab"
                  data-toggle="tab"
                  href="#nav-cart"
                  role="tab"
                  aria-controls="nav-cart"
                  aria-selected="true"
                >
                  <i className="fas fa-shopping-cart mr-3"></i>Cart
                </a>
                <a
                  className="nav-link"
                  style={{ color: "#3680B4" }}
                  id="nav-wishlist-tab"
                  data-toggle="tab"
                  href="#nav-wishlist"
                  role="tab"
                  aria-controls="nav-wishlist"
                  aria-selected="false"
                >
                  <i className="fas fa-heart mr-3"></i>Wishlist
                </a>
                <a
                  className="nav-link"
                  style={{ color: "#3680B4" }}
                  id="nav-orders-tab"
                  data-toggle="tab"
                  href="#nav-orders"
                  role="tab"
                  aria-controls="nav-orders"
                  aria-selected="false"
                >
                  <i className="fas fa-list-alt mr-3"></i>Orders
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div
          className="row bg-white"
          style={{ minHeight: "40rem", padding: 20 }}
        >
          <div className="tab-content container-fluid" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-cart"
              role="tabpanel"
              aria-labelledby="nav-cart-tab"
            >
              {cart && viewCart()}
            </div>
            <div
              className="tab-pane fade"
              id="nav-wishlist"
              role="tabpanel"
              aria-labelledby="nav-wishlist-tab"
            >
              {wishlist && viewWishlist()}
            </div>
            <div
              className="tab-pane fade"
              id="nav-orders"
              role="tabpanel"
              aria-labelledby="nav-orders-tab"
            >
              {orders && viewOrders()}
            </div>
          </div>
        </div>

        {viewPlaceOrder()}
      </div>
    );
  };

  return <div className="container-fluid">{shoppingProfile()}</div>;
};

export { Profile };
