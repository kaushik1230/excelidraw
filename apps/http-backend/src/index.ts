import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { createUserSchema, RoomSchema, SigninSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
  const data = createUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
    return;
  }
  res.json({ userId: "123" });
});

app.post("/signin", (req, res) => {
  const data = SigninSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
    return;
  }
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data = RoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});

app.listen(3002);
