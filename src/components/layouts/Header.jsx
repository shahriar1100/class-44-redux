import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { FaShopify } from "react-icons/fa";


const Header = () => {
  let [show, setShow] = useState(false)
  let handleClick = ()=>{
    setShow(!show)
  };
  let data = useSelector((state)=> state.addtocart.value)
  return (
    <>
      <div className="py-10 bg-amber-50">
        <Container>
          <Flex className={`justify-between items-center relative`}>
            <ul className="flex gap-x-12 font-semibold">
              <Link to={"/"}>
                <li>HOME</li>
              </Link>
              <Link to={"shop"}>
                <li>SHOP</li>
              </Link>
              <Link to={"about"}>
                <li>ABOUT</li>
              </Link>
              <Link to={"contact"}>
                <li>CONTACT</li>
              </Link>
            </ul>
            <div onClick={handleClick} className="text-4xl">
              <FaShopify/>
              {show &&
                  <div className="p-5 bg-amber-200 w-[800px] absolute right-0 top-15">
                    <div className={`text-2xl`}>
                      {/* <div className="">Product Name</div>
                      <div className="">Product price </div>
                      <div className="">Product Quantity</div>
                      <div className="">Product Image</div>
                      <div className="">Total</div> */}
                      {data.map((item)=>(
                        <>
                        <div className="flex justify-between items-center list-none">
                        <li>{item.title}</li>
                        <li>{item.price}</li>
                        <li>{item.quantity}</li>
                        <li><Image imgSrc={item.thumbnail}/></li>
                        </div>
                        </>
                      ))

                      }
                    </div>
                  </div>
              }
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
