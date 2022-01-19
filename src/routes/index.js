import { Router } from "express";
import rateRouter from "./v1/rate.js";

export const router = Router();

export const register = (app) => {
    app.use("/v1/rates", rateRouter)
}