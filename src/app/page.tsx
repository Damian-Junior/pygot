import "../styles/app.scss";
import "../styles/kwii.min.css";
import { ConfigProvider, theme } from "antd";
import React, { useContext } from "react";
import { AppContext, AppProvider } from "../_app/app-context/index";
import AppLayout from "../_app/app-layout/index";
const { defaultAlgorithm, darkAlgorithm } = theme;
export default function App({ Component, pageProps }) {
  const { isDarkMode } = useContext(AppContext);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <AppProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProvider>
    </ConfigProvider>
  );
}
