import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Iphone() {
  const [products, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("./Mimic.json");

      const result = await response.json();
      console.log("thisiss",result);
      console.log(response)
      setData(result);
    }
    getData();
  }, []);
  console.log("helloooo111");

  let flip = true;
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
        {products.map((product) => {
          let id = product.Product_id;
          console.log(id);
          let Brief = product.Product_Brief_Description;
          let StartPrice = product.Starting_price;
          // let PriceRange = product.price_range;
          // let productPage = "/iphone/" + id;
          let order1 = 1;
          let order2 = 2;
          if (flip) {
            order1 = 2;
            order2 = 1;
            flip = !flip;
          } else {
            flip = !flip;
          }
          let productDiv = (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${product.product_name}`}>
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`col-sm-12 col-md-6 order-${order2}`}>
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
