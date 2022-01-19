import { schema } from "../../models/rate.model.js";
import { defineEntityRouter } from "../base.js";

const rateRouter = defineEntityRouter("rate", schema)

export default rateRouter;