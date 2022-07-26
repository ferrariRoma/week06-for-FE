import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = memo(() => {
  return (
    <>
      <div className="fa-3x spinnerDiv">
        <FontAwesomeIcon icon={faSpinner} className="spinnerFont" />
      </div>
    </>
  );
});

export default LoadingSpinner;
