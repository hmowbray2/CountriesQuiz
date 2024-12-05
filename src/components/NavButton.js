import React from "react";

const NavButton = ({ name, nextPage, prevPage, pageId }) => {
  return (
    <div>
      {name === "next" ? (
        <button
          className="btn"
          onClick={() => {
            nextPage(pageId);
            console.log("after click " + pageId);
          }}
        >
          {name}
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            prevPage(pageId);
            console.log("after click " + pageId);
          }}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default NavButton;
