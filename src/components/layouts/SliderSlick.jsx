import React, { useEffect, useState } from "react";
// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Container from "../Container";
import Products from "../Products";
// slider

const SliderSlick = () => {
  // slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  // slider
  // api
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function getData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    getData();
  });
  // api
  return (
    <>
      <Container>
        <Slider {...settings}>
          {allData.map((item) => (
            <div className="mb-2.5">
              {/* <img src={item.thumbnail} alt="" />
                <h3>Title: {item.title}</h3>
                <h3>Price: {item.price}</h3>
                <h3>Quantity: {item.minimumOrderQuantity}</h3> */}
              <Products
                productImg={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
                productDescription={item.description}
                productQuantity={item.minimumOrderQuantity}
              />

              
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default SliderSlick;
