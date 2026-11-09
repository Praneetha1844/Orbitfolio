import React, { useRef, useState, useEffect } from 'react';

const WIDTH = 1000;
const HEIGHT = 500;

function fillWhite(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Convert a pointer event to canvas pixels. The canvas is scaled down by CSS on narrow screens,
// so offsets in CSS pixels must be mapped back to the 1000x500 drawing surface.
function toCanvasPoint(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((e.clientX - rect.left) * canvas.width) / rect.width,
    y: ((e.clientY - rect.top) * canvas.height) / rect.height,
  };
}

const Game1 = () => {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    fillWhite(canvasRef.current);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = toCanvasPoint(canvas, e);
    canvas.setPointerCapture?.(e.pointerId);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawingRef.current = true;
  };

  const draw = (e) => {
    if (!drawingRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = toCanvasPoint(canvas, e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    drawingRef.current = false;
  };

  // Clearing repaints white: clearRect would leave a transparent canvas.
  const clearCanvas = () => fillWhite(canvasRef.current);

  return (
    <div className="game1-container">
      <h1 className="game-title">Paint Game</h1>
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          role="img"
          aria-label="Drawing canvas. Drawing needs a mouse, pen or touch."
        ></canvas>
      </div>
      <div className="controls">
        <div className="color-picker">
          <label htmlFor="color">Choose Color:</label>
          <input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className="brush-size">
          <label htmlFor="brush">Brush Size:</label>
          <input
            id="brush"
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
        </div>
        <button type="button" className="clear-btn" onClick={clearCanvas}>
          Clear Canvas
        </button>
      </div>
    </div>
  );
};

export default Game1;
