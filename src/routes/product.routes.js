import { Router } from "express";
const router = Router();

import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getNewProducts,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAdmin } from "../middlewares/auth.middleware.js";

router
  .route("/")
  .post(isAdmin, upload.single("image"), createProduct)
  .get(getAllProducts);

router
  .route("/:productId")
  .patch(upload.single("image"), updateProduct)
  .delete(deleteProduct);

router.route("/new").get(getNewProducts);

export default router;
