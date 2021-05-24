import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: true, limit: "30mb", extended: true }));

app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome to API route.",
	});
});

mongoose
	.connect(process.env.DATABASE_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(process.env.PORT || 5000, () => {
			console.log(`Connected to the Port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
