// import React from 'react'

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  console.log(productId);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/Mimic.json");

      const result = await response.json();
      const singleProduct = result.filter(
        (product) => product.product_name == productId
      );
     
      setProduct(singleProduct);
    }
    getData();
  }, []);
  console.log("hellooooo");
  return (
    <div className="internal-page-wrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <h1 className="font-weight-bold">Iphones</h1>
            <div className="brief-description mb-5">
              The best for the brightest.
            </div>
          </div>
        </div>
        {product.map((product) => {
          let id = product.Product_id;
          console.log(id);
          let Brief = product.Product_brief_description;
          let StartPrice = product.Starting_Price;

          let productDiv = (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto`}>
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="starting-price">
                  {product.Product_description}
                </div>
                <div className="monthly-price">{product.price_range}</div>
                {/* <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${id}`}>Learn more</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className={`col-sm-12 col-md-6 `}>
                <div className="product-image">
                  <img src={product.Product_img} alt="product" />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </div>
  );
}

export default SingleProduct;
