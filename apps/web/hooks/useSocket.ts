import { WS_URL } from "../app/config";
import { useEffect, useState } from "react";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return { loading, socket };
}
