import React from "react";
// import "./RandomQuote.css";
export default function RandomQuote(data) {
  return (
    <div className="card">
      <div className="card_inside">
        <div>
          <div className="open-quote">&#8220;</div>
          <div id="content">{data.data.content}</div>
          <div className="close-quote">&#8221;</div>
        </div>

        <div>
          <div id="author">{data.data.author}</div>
        </div>
      </div>
    </div>
  );
}
