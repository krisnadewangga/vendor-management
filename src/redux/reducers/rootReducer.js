import { combineReducers } from "redux"
import calenderReducer from "./calendar/"
import emailReducer from "./email/"
import chatReducer from "./chat/"
import todoReducer from "./todo/"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"
import dataList from "./data-list/"
import dataListApg from "./data-list-apg/"
import dataListVendor from "./data-list-vendor/"
import apgVendor from "./apgVendor/"
import dashboard from "./dashboard"
import profil from "./profil"
import notification from './notification';

const rootReducer = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  dataListApg: dataListApg,
  dataListVendor: dataListVendor,
  apgVendor: apgVendor,
  dashboard: dashboard,
  profil: profil,
  notification,
})

export default rootReducer
