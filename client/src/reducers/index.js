import { combineReducers } from "redux";

import blogs from "./blogs";
import blog from "./blog";

export const reducers = combineReducers({ blogs, blog });
