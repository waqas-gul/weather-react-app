import React from "react";

const ErrorMessage = () => {
  return (
    <div className="error">
      <h3>
        Sorry, we couldn't find the city <br /> you were looking for. <br />{" "}
        Please check the spelling or <br /> try a different city.
      </h3>
    </div>
  );
};

export default ErrorMessage;
