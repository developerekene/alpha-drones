import { url } from "inspector";
import React, { ReactNode } from "react";
import "../MainContainer/MainContainer.css";

interface MainContainerInterface {
  navView: ReactNode;
  backgroundImage: string;
  headerTitle?: string;
  subTitle?: string;
  buttonView?: ReactNode;
  secondButtonView?: ReactNode
  contactForm?: ReactNode;
  subFooter?: ReactNode;
  isTrue?: Boolean
}

export const windowWidth: number = window.screen.width;
export const windowHeight: number = window.screen.height;

console.log(windowHeight);

const MainContainer: React.FC<MainContainerInterface> = ({
  backgroundImage,
  navView,
  headerTitle,
  subTitle,
  buttonView,
  secondButtonView,
  contactForm,
  subFooter,
  isTrue
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
        <h1 className="header">{headerTitle}</h1>
        <p className="subtitle">{subTitle}</p>
      </div>
      <div className="buttonStyle">
        {buttonView}
        {secondButtonView}
      </div>
      <div>
        {contactForm}
      </div>
      <div>
        {subFooter}
      </div>
    </div>
  );
};

export default MainContainer;
