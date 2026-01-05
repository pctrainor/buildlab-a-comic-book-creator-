import React, { useState, useRef, useEffect } from 'react';
import { Save, Trash2, Brush } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface CanvasProps {
  width: number;
  height: number;
  onSave: (dataUrl: string) => void;
  onClear: () => void;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, onSave, onClear }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [width, height]);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  };

  const endDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.closePath();
        setIsDrawing(false);
      }
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      onSave(dataUrl);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        onClear();
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-zinc-900 to-slate-800 p-4 rounded-lg shadow-xl">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border border-gray-700 shadow-md"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleSave}
          className="flex items-center text-white hover:text-green-400 transition-colors"
        >
          <Save className="w-6 h-6 mr-2" />
          Save
        </button>
        <button
          onClick={handleClear}
          className="flex items-center text-white hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-6 h-6 mr-2" />
          Clear
        </button>
      </div>
    </div>
  );
};

export default Canvas;