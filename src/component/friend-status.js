import React from "react";
import { useIsOnline } from "../hooks/useIsOnline";

const FriendStatus = () => {
  const isOnline = useIsOnline();
  return (
    <div>
      <p>Friend status</p>
      <p>{isOnline ? "online" : "offline"}</p>
    </div>
  );
};

export default FriendStatus;
