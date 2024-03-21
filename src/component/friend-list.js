import React from "react";
import { useIsOnline } from "../hooks/useIsOnline";

const FriendList = () => {
  const isOnline = useIsOnline();
  return (
    <div>
      <p>friendList online will be green</p>
      <p style={{ color: isOnline ? "green" : "grey" }}>Status</p>
    </div>
  );
};

export default FriendList;
