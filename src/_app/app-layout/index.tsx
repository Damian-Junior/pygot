"use client";

import React, { ReactElement, useContext } from "react";
import AppSider from "../lib/app-sider/index";
import { Layout } from "antd";
import Header from "../lib/header/index";
import { AppContext } from "../app-context/index";

const { Content } = Layout;
const AppLayout = ({ children }: ReactElement | ReactElement[]) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }} hasSider>
        <AppSider collapsed={toggleSidebar} data-testid={"dti_sider"} />
        <Layout>
          <Header
            setToggleSidebar={setToggleSidebar}
            toggleSidebar={toggleSidebar}
          />
          <Content
            className={"w-100 kwii-mt-2 kwii-pl-8 kwii-pr-1 kwii-bg-white"}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default AppLayout;
