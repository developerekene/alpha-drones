import { url } from "inspector";
import React from "react";
import "../MainContainer/MainContainer.css";

interface MainContainerInterface {
  navView: any;
  backgroundImage: any;
  headerTitle: string;
  subTitle: string;
  buttonView: any
}

export const windowWidth: number = window.screen.width;
export const windowHeight: number = window.screen.height;

console.log(windowHeight);

const MainContainer: React.FC<MainContainerInterface> = ({
  backgroundImage,
  navView,
  headerTitle,
  subTitle,
  buttonView
}) => {
  return (
    <div
      className="mainCon"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: windowHeight - 100,
        width: "100%",
      }}
    >
      <div>{navView}</div>
      <div>
        <h1>{headerTitle}</h1>
        <p>{subTitle}</p>
      </div>
      <div>
        {buttonView}
      </div>
    </div>
  );
};

export default MainContainer;
