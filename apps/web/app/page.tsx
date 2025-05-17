"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <input
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          type="text"
          placeholder="Room id"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        ></input>

        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
