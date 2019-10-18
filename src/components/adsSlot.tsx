import React from "react";

export enum AdsKey {
  TOP = "TOP",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM"
}

const getSlotId = (id: AdsKey) => `div-apd-${id}`;

type P = { id: AdsKey };

export const AdsSlot: React.FC<P> = props => <div id={getSlotId(props.id)} />;
