import { MenuProps } from "antd";
import { MailOutlined, SettingOutlined } from "@ant-design/icons/lib";
import React from "react";
import {
  App1,
  App2,
  App3,
  MenuIcon,
  OrderIcon,
  PaymentIcon,
  StoreIcon,
} from "../../../../../_shared/assets/svg";

export const SiderItems: MenuProps["items"] = [
  {
    iconPath: <App1 />,
    label: "App1",
  },
  {
    iconPath: <App2 />,
    label: "App2",
  },
  {
    iconPath: <App3 />,
    label: "App3",
  },
].map(({ iconPath, label }) => ({
  key: `/apps/${label.replace(/\s+/g, "-").toLowerCase()}`,
  icon: iconPath,
}));
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
type MenuItem = Required<MenuProps>["items"][number];

export const app1Items: MenuItem[] = [
  getItem("My Store", "/apps/app1/store", <StoreIcon />, [
    getItem("Categories", "/apps/app1/store"),
    getItem("About Us", "2"),
    getItem("Promotion/Sales", "3"),
  ]),
  getItem("Menu", "sub2", <MenuIcon />, [
    getItem("Option 9", "/apps/app1/menu"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Orders", "sub3", <OrderIcon />, [
    getItem("Option 9", "/apps/app1/order"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Payments", "sub4", <PaymentIcon />, [
    getItem("Option 9", "/apps/app1/payment"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

export const app2Items: MenuItem[] = [
  getItem("Menu2", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Store2", "sub2", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Order2", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];
export const app3Items: MenuItem[] = [
  getItem("App 3 Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("App 3 Navigation Two", "sub2", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("App 3 Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];
