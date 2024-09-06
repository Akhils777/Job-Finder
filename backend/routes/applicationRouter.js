import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import {
  deleteApplication,
  employerGetAllApplication,
  jobFinderGetAllApplication,
  postApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

router.post(
  "/post/:id",
  isAuthenticated,
  isAuthorized("Job Finder"),
  postApplication
);

router.get(
  "/employer/getall",
  isAuthenticated,
  isAuthorized("Employer"),
  employerGetAllApplication
);

router.get(
  "/jobfinder/getall",
  isAuthenticated,
  isAuthorized("Job Finder"),
  jobFinderGetAllApplication
);

router.delete("/delete/:id", isAuthenticated, deleteApplication);

export default router;