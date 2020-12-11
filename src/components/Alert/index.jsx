import React from "react";

const Alert = ({ message, setIsAlertDisplayed, type }) => {
  return (
    <div className={`alert ${type} absolute top-0 right-0 left-0 text-white p-2 flex justify-between`}>
      <p className="text-center">{message}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={type}
        onClick={(event) => {
          setIsAlertDisplayed(false);
        }}
      >
        <g id="close_24px">
          <path
            id="icon/navigation/close_24px"
            d="M18.3 5.70999C18.1131 5.52273 17.8595 5.4175 17.595 5.4175C17.3305 5.4175 17.0768 5.52273 16.89 5.70999L12 10.59L7.10997 5.69999C6.92314 5.51273 6.66949 5.4075 6.40497 5.4075C6.14045 5.4075 5.8868 5.51273 5.69997 5.69999C5.30997 6.08999 5.30997 6.71999 5.69997 7.10999L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10999C18.68 6.72999 18.68 6.08999 18.3 5.70999Z"
            fill="#3a405a"
          />
        </g>
      </svg>
    </div>
  );
};

export default Alert;