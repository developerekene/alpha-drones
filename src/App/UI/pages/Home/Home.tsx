import React from "react";
import { Button, colors } from "@mui/material";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import NavBar from "../../components/NavBar/NavBar";

const Home: React.FC<any> = ({}) => {
  return (
    <div>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.homeBackground}`}
        headerTitle={"juhgufsv"}
        subTitle={"sfhiufs"} 
        buttonView={<button>a</button>}      />
    </div>
  );
};

export default Home;
