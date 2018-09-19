import React from "react";
import spinner from "../gif/spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "40px auto", display: "block" }}
        alt="Loading.."
      />
    </div>
  );
};
