import { combineReducers } from "redux";

import blogs from "./blogs";
import blog from "./blog";
import auth from "./auth";

export const reducers = combineReducers({ blogs, blog, auth });
