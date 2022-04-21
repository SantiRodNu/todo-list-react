import "./TreeImage.css";
import { useState } from "react";

const TreeImage = () => {
  const [showThings, setShowThings] = useState(false);

  const showOrHide = () => {
    setShowThings(!showThings);
  };

  return (
    <div className="treeImageContainer">
      <button onClick={showOrHide} className="showHideButton">
        Show or hide
      </button>
      {showThings ? (
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="tree"
          className="treeImage"
        />
      ) : (
        <span>No image</span>
      )}
    </div>
  );
};

export default TreeImage;
