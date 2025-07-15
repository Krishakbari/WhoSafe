import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import connectDB from "./utils/db.js";

import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import cartRoute from "./routes/cartRoute.js";
import blogRoute from "./routes/blogRoute.js";
import orderRoute from "./routes/orderRoute.js";
import adminRoute from "./routes/adminRoute.js";
import authRoute from "./routes/authRoute.js";
import subscribeRoute from "./routes/subscribeRoute.js";
import contactRoute from "./routes/contactRoute.js"
import paymentRoute from "./routes/paymentRoute.js"
import googleRoute from "./routes/googleRoute.js"

// Load Google OAuth config
import "./config/passport.js";

const app = express();

dotenv.config();
connectDB();

// Middleware

const allowedOrigins = ['http://localhost:5173', 'https://whosafe-frontend.onrender.com'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Handle preflight requests
app.options('*', cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use("/img", express.static(path.join(process.cwd(), "public/img")));

// 🔐 Session middleware for Passport
app.use(
  session({
    secret: "your-session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// 🔐 Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Routes
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/", // or redirect to profile or dashboard
  })
);

// Optional: View user info
app.get("/profile", (req, res) => {
  res.json(req.user || null);
});

// Logout
app.get("/logout", (req, res) => {
  req.logout(err => {
    res.redirect("/");
  });
});

// All App Routes
app.use("/product", productRoute);
app.use("/auth", userRoute);
app.use("/auth", authRoute);

app.use("/cart", cartRoute);
app.use("/blog", blogRoute);
app.use("/order", orderRoute);
app.use("/admin", adminRoute);
app.use("/subscribe", subscribeRoute);
app.use("/contact", contactRoute);
app.use("/payment", paymentRoute);
app.use(googleRoute);


// Test
app.get("/", (req, res) => {
  res.send("on");
});

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
