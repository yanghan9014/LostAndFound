/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import HomePage from "./views/Home/Home.js";
import LostSheet from "./views/Lost/Lost.js";
import FoundSheet from "./views/Found/Found.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import LostItems from "./views/LostItems/LostItems.js";
import FoundItems from "./views/FoundItems/FoundItems.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "./views/RTLPage/RTLPage.js";

import Account from "./views/Account/Account.js";

const homeRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/lost",
    name: "Lost",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: LostSheet,
    layout: "/admin",
  },
  {
    path: "/found",
    name: "Found",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: FoundSheet,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },/*
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },*/
  {
    path: "/LostItems",
    name: "Lost Items",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: LostItems,
    layout: "/admin",
  },
  {
    path: "/FoundItems",
    name: "Found Items",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: FoundItems,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/account",
    name: "Account",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Account,
    layout: "/admin",
  },
];

export default homeRoutes;
