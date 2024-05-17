import React, { useReducer, useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { onSignup, onGetProducts } from "../store/actions";
import { ProductDetails } from "./ProductDetail";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const { categories, products } = useAppSelector(
    (state) => state.shoppingReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onGetProducts());
  }, []);

  const listOfcategories = () => {
    return (
      <div className="row" aria-label="Basic example">
        {categories.map((item) => {
          return (
            <button
              key={item}
              type="button"
              onClick={() => {}}
              className="btn btn-lg m-2"
              style={{
                backgroundColor: "#4E8A37",
                borderRadius: 30,
                color: "#FFF",
              }}
            >
              {item.toUpperCase()}
            </button>
          );
        })}
      </div>
    );
  };

  const listOfProducts = () => {
    return products.map((item) => {
      return <ProductCard item={item} />;
    });
  };

  return (
    <div class="container-fluid p-0">
      <img src="bg.jpg" class="card-img" alt="..."></img>
      <div
        className="container-flud mb-4"
        style={{
          height: 80,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#61AB4F",
        }}
      >
        <div class="row justify-content-center">
          {categories && listOfcategories()}
        </div>
      </div>

      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {products && listOfProducts()}
      </div>
    </div>
  );
};

export { Home };
