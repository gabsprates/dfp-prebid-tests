import React from "react";
import { AdsSlot, AdsKey } from "../components/adsSlot";

const Artist: React.FC = () => {
  return (
    <div>
      <AdsSlot id={AdsKey.TOP} />
      <h1>Artist</h1>
    </div>
  );
};

export default Artist;
