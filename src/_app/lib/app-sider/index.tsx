import { Layout, Menu, MenuProps, Popover, Space } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type siderProps = {
  collapsed?: boolean;
};
import { motion } from "framer-motion";
import type { MenuProps } from "antd";
import { app1Items, app2Items, app3Items, SiderItems } from "./lib/sider-item/index";
import { DropDownArrow, Logo, LogoText } from "../../../_shared/assets/svg";
import { useContent } from "./lib/_min/index";

const AppSider = ({ collapsed }: siderProps) => {
  const { push, pathname } = useRouter();
  const urlPath = pathname?.split("/");
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [appItem, setAppItem] = useState("app1");
  const [animationKey, setAnimationKey] = useState(0);
  const { content } = useContent({ accountusers: ["Ikotu", "Ikorodu"] });
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={"kwii-bg-white"}
      width={270}
      style={{
        maxHeight: "100vh",
        overflowY: "auto",
        marginRight: 25,
      }}
    >
      {
        <Space
          size={20}
          onClick={() => push("/")}
          className={`kwii-ml-5 kwii-mt-7 kwii-pointer ${
            !collapsed ? "kwii-mb-10" : "kwii-mb-5"
          } `}
        >
          {/*<Logo width={40} height={40} />*/}
          <span
            className={"kwii-fs-1 kwii-fw-boldest "}
            style={{ color: "#000" }}
          >
            <Logo />
          </span>
        </Space>
      }
      <Menu
        items={SiderItems}
        mode={"inline"}
        onClick={(value) => {
          const label = value.key.trim().split("/");
          const appName = label.pop();
          console.log(appName);
          setAppItem(appName);
          setAnimationKey((prevKey) => prevKey + 1);
          // if (value.key.includes("@@")) return;
          // push(value.key);
        }}
        selectedKeys={[`/apps/${urlPath?.[2]}`]}
      />

      {!collapsed && (
        <>
          <motion.div
            key={animationKey}
            className={"side_bar_togggle"}
            initial={{ left: "-100%", zIndex: "-100" }}
            animate={{ left: "25%", zIndex: "10" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div style={{ marginLeft: "30px", marginBottom: "18px" }}>
              <LogoText />
            </div>
            <Popover
              content={content}
              className={"kwii-pointer"}
              placement={"rightTop"}
              trigger={"click"}
              overlayStyle={{ zIndex: 10 }}
            >
              <div className={"user_accounts"}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: " #1B1C1E",
                  }}
                >
                  Icota Account
                </span>
                <DropDownArrow style={{ marginRight: -5 }} />
              </div>
            </Popover>
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              onClick={(value) => {
                if (value.key.includes("@@")) return;
                push(value.key);
              }}
              style={{ width: 200 }}
              items={
                appItem == "app1"
                  ? app1Items
                  : appItem == "app2"
                  ? app2Items
                  : appItem == "app3" && app3Items
              }
            />
          </motion.div>
        </>
      )}
    </Layout.Sider>
  );
};

export default AppSider;
