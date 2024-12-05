import React from "react";

const NavButton = ({ name, nextPage, prevPage, pageId }) => {
  return (
    <div>
      {name === "next" ? (
        <button
          onClick={() => {
            nextPage(pageId);
            console.log("after click " + pageId);
          }}
        >
          {name}
        </button>
      ) : (
        <button
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
