import React from "react";
import "../assets/TitleCard.css";

const TitleCard = ({ title = "TECHCRESCENZA", year = "2026" }) => {
  const lastLetter = title.slice(-1);
  const rest = title.slice(0, -1);

  return (
    <div className="centered">
      <div className="title-backdrop">
        <div className="stranger-things">

          <hr />

          <div className="eighties line1">
            {rest}
            <span className="last-letter">{lastLetter}</span>
          </div>

          <hr className="bottom-line" />
          <hr className="bottom-line right" />

          <div className="eighties line2">{year}</div>

        </div>
      </div>
    </div>
  );
};

export default TitleCard;
