import React from "react";
import { AdsSlot, AdsKey } from "../components/adsSlot";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <AdsSlot id={AdsKey.BOTTOM} />
    </div>
  );
};

export default Home;
