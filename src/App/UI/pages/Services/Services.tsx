import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import "../Services/Services.css";

const Services: React.FC<any> = () => {
  return (
    <main>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactHome}`}
      />
      <section className="sec">
        <div>
          <p className="trans">
            <b>Transportation</b>
          </p>
          <p className="note">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div>
          <p className="trans">
            <b>Event coverage</b>
          </p>
          <p className="note">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div>
          <p className="trans">
            <b>Security</b>
          </p>
          <p className="note">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div>
          <p className="trans">
            <b>Video Coverage</b>
          </p>
          <p className="note">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </section>
      <article className="article">
        <h4 className="h4">FEATURE DRONES</h4>
        <p className="p-1">Make it Easy To in Control Drones</p>
        <div className="feature">
          <p>
            You need a diam in the arc of the course of Euismod, who is the
            <br />
            cartoonist. Lake cartoon life homework football recipe and recipe
            <br />
            until and. Urn employee at the element of easy football. There is
            <br />
            always no bed at the end of life. Neither of life nor of children
            nor <br />
            of any kind. Start until the mass is correct The airline needs to be
            <br />
            smart The old man and the grandson were waiting
          </p>
          <div className="view">
            <div className=" blue">
              <img src={`${Assets.images.serve}`} width={"80%"} height={125} />
            </div>
            <div className="shape">
              <p className="last-p">
                Get cashback up 25% On your first <br /> purchase order Now,
                let's get ready for life,  if you don't have a good life.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Services;
