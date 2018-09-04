import jwt from "jsonwebtoken";

// const JWT_SECRET: any = process.env.JWT_SECRET;
const JWT_SECRET: any = "hellomyfriend";

const JWT_OPTS: { issuer: string } = {
  issuer: "InStore"
};

const createToken = (user: any) => {
  if (!user && !user._id) {
    return null;
  }

  const payload: any = {
    id: user._id
  };

  return jwt.sign(payload, JWT_SECRET, JWT_OPTS);
};

const verifyToken = (token: any) => {
  return jwt.verify(token, JWT_SECRET, JWT_OPTS);
};

const getTokenFromHeaders = (req: any) => {
  const token = req.headers.authorization;
  if (token) {
    const arr = token.split(" ");
    console.log("arr ", arr);

    if (arr[0] === "Bearer" && arr[1]) {
      try {
        return verifyToken(arr[1]);
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
  return null;
};

export const AuthServices = {
  createToken,
  verifyToken,
  getTokenFromHeaders
};
