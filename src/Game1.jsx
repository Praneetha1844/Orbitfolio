import React, { useRef, useState, useEffect } from 'react';


const Game1 = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('#000000'); // Default color is black
  const [brushSize, setBrushSize] = useState(5); // Default brush size

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(e.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with white color initially
  }, []);

  return (
    <div className="game1-container">
      <h1 className="game-title">Paint Game</h1>
      <div className="canvas-container  ">
        <canvas
         
          ref={canvasRef}
          width={1000}
          height={500}
         
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          role="img"
          aria-label="Drawing canvas"
        ></canvas>
      </div>
      <div className="controls">
        <div className="color-picker">
          <label htmlFor="color">Choose Color:</label>
          <input id="color" type="color" value={color} onChange={handleColorChange} />
        </div>
        <div className="brush-size">
          <label htmlFor="brush">Brush Size:</label>
          <input
            id="brush"
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={handleBrushSizeChange}
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
