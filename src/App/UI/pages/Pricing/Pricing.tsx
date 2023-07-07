import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import "../Pricing/Pricing.css";

const Pricing: React.FC<any> = () => {
  return (
    <main className="main">
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactBackground}`}
      />
      <section className="section">
        <div className="box-1">
          <div className="u-box">
            <p>Free Account</p>
            <p>$300 / per month</p>
          </div>
          <div className="u-box">
            <img src={`${Assets.images.solidcam}`} width={"25%"} height={40} />
            <p>1 free credit </p>
          </div>

          <div className="u-box">
            <img src={`${Assets.images.gis}`} width={"25%"} height={60} />
            <p>Apps for Windows /</p>
          </div>

          <div className="u-box">
            <img src={`${Assets.images.speaker}`} width={"25%"} height={60} />
            <p>Refer friends and earn credits</p>

            <button className="buttn" type="button">
              Subscribe
            </button>
          </div>
        </div>
        <div className="box-2">
          <p>Subscription plan</p>
          <p>$500 / per month</p>
          <ul className="ul">
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
          </ul>

          <div className=" on">
            <p>Pay monthly</p>
            <img src={`${Assets.images.mdi}`} width={"10%"} height={30} />
            <p>Pay yearly save 10%</p>
          </div>
          <div className="u-box">
            <button className="buttn">Subscribe</button>
          </div>
        </div>
        <div className="box-3">
          <p>$400 / per month</p>
          <ul className="ul-2">
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
            <li> 40 credits / month $ 9 $ 0.23 / image</li>
          </ul>
          <div className="u-box">
            <button className="buttn">Buy Now</button>
          </div>
        </div>
      </section>
      <div>
        <p className="fre">
          <b>Frequently asked questions</b>
        </p>
        <table className="table">
          <tr>
            <td className="td">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </td>
          </tr>
          <tr>
            <td className="td">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </td>
          </tr>
          <tr>
            <td className="td">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </td>
          </tr>
          <tr>
            <td className="td">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </td>
          </tr>
          <tr>
            <td className="td">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </td>
          </tr>
        </table>
        <p className="fre">
          <b>
            Trusted by 28,000+ customers from 200+ countries around the globe
          </b>
        </p>
      </div>
      <div className="logo">
        <img src={`${Assets.images.logoA}`} width={"10%"} height={30} />
        <img src={`${Assets.images.logoB}`} width={"10%"} height={30} />
        <img src={`${Assets.images.logoC}`} width={"10%"} height={30} />
      </div>
    </main>
  );
};

export default Pricing;
