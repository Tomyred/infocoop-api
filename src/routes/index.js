import { Router } from "express";
import linkRouter from "./v1/link.js";
import rateRouter from "./v1/rate.js";

export const router = Router();

export const register = app => {
    app.use("/v1/rates", rateRouter);
    app.use("/v1/links", linkRouter);
};
