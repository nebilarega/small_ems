import express from "express";
const router = express.Router();

import {
  employee_list,
  employee_create,
  employee_bulk_delete,
  employee_detail,
  employee_update,
  employee_delete,
} from "../controller/employee.js";

router.get("/", employee_list);
router.post("/", employee_create);
router.delete("/", employee_bulk_delete);

router.get("/:id", employee_detail);
router.put("/:id", employee_update);
router.delete("/:id", employee_delete);

export default router;
