import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export interface IJwtPayload extends JwtPayload {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "LANDLORD" | "TENANT";
}

const verifyToken = (token: string, secret: string): IJwtPayload | null => {
  try {
    return jwt.verify(token, secret) as IJwtPayload;
  } catch {
    return null;
  }
};

export const jwtUtils = {
  verifyToken,
};
