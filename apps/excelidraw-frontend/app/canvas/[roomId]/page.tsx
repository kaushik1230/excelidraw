"use client";
import { initDraw } from "@/draw";
import { init } from "next/dist/compiled/webpack/webpack";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current as HTMLCanvasElement);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width={1080} height={1000}></canvas>
    </div>
  );
}
