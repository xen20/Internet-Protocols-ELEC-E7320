import React, { useState } from "react";
import Draggable from "react-draggable";
import { styles } from "../theme/styles";
import { Brush, Plus, Minus, Eraser, Reset, Download } from "../theme/svg";
import ColourPicker from "./ColourPicker";
import { download } from "./download";

export default function Swatch({
  toolType,
  setToolType,
  width,
  setWidth,
  setElements,
  setColorWidth,
  setPath,
  colorWidth,
  setShapeWidth,
}) {
  const [displayStroke, setDisplayStroke] = useState(false);

  const handleClickStroke = () => {
    setDisplayStroke(!displayStroke);
    setColorWidth(colorWidth);
  };

  const increaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width < 30) setWidth((prev) => prev + 5);
    }
    if (toolType === ("triangle" || "rectangle" || "circle")) {
      if (width < 15) setShapeWidth((prev) => prev + 3);
    }
  };
  const decreaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width > 1) setWidth((prev) => prev - 5);
    }
    if (toolType === ("triangle" || "rectangle" || "circle")) {
      if (width > 1) setShapeWidth((prev) => prev - 3);
    }
  };
  return (
    <div>
      <div className="row">
        <div
          className="col-md-1 icon-bar"
          style={{
            position: "absolute",
            backgroundColor: "#f0f0f0",
            height: `${window.innerHeight * 0.05 * 8}px`,
            width: `${window.innerWidth * 0.045 * 1.8}px`,
            left: "2px",
            top: `${
              (window.innerHeight - window.innerHeight * 0.05 * 8) / 2
            }px`,
            borderRadius: "10px",
          }}
        >
          <button
            id="brush"
            data-toggle="tooltip"
            data-placement="top"
            title="Brush"
            style={styles.righticons}
            onClick={() => {
              setToolType("brush");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Brush toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="writing"
            data-toggle="tooltip"
            data-placement="top"
            title="Writing"
            style={styles.righticons}
            onClick={() => {
              return (
                <Draggable>
                  <div className="box">I can be dragged anywhere</div>
                </Draggable>
              );
            }}
          ></button>

          <button
            id="eraser"
            data-toggle="tooltip"
            data-placement="top"
            title="Eraser"
            style={styles.righticons}
            onClick={() => {
              setToolType("eraser");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Eraser toolType={toolType} colorWidth={colorWidth} />
          </button>
        </div>

        <div className="col-md-11">
          <div
            className="row icon-vbar"
            style={{
              position: "absolute",
              backgroundColor: "#f0f0f0",
              width:
                window.innerWidth <= 1024
                  ? `${window.innerWidth * 0.073 * 5.6}px`
                  : `${window.innerWidth * 0.073 * 4.79}px`,
              height: `${window.innerHeight * 0.3}px`,
              right: `${
                (window.innerWidth - window.innerWidth * 0.073 * 4.8) / 20
              }px`,
              top: "0px",
              borderRadius: "10px",
            }}
          >
            <button
              style={styles.topicons}
              data-toggle="tooltip"
              data-placement="top"
              title="Clear"
              onClick={() => {
                setElements([]);
                setPath([]);
                return;
              }}
            >
              <Reset />
            </button>
            <button
              style={styles.topicons}
              data-toggle="tooltip"
              data-placement="top"
              title="Download"
            >
              <a href="#" onClick={download}>
                <Download />
              </a>
            </button>
            <div>
              <button
                style={styles.picker}
                onClick={handleClickStroke}
              ></button>
            </div>
            <button
              style={styles.topicons}
              onClick={increaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Increase Width"
            >
              <Plus />
            </button>
            <button
              style={styles.topicons}
              onClick={decreaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Decrease Width"
            >
              <Minus />
            </button>
          </div>
          <div
            className="row"
            style={{ position: "absolute", right: "0px", top: "0px" }}
          >
            {displayStroke && (
              <div className="col-md-3">
                <ColourPicker setColorWidth={setColorWidth} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
