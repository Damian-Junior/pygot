import React, { Dispatch, SetStateAction, useContext } from "react";
import { motion } from "framer-motion";
import NotificationContainer from "../../../containers/notification/index";
import UserDetails from "../../../components/_shared/user-details/index";
import { Hamburger } from "../../../_shared/assets/svg";
import { AppContext } from "../../app-context/index";
import { ConfigProvider, theme } from "antd";
import { DarkIcon, LightIcon } from "../../../_shared/assets/svg/index";

type HeaderProps = {
  setToggleSidebar?: Dispatch<SetStateAction<boolean>>;
  toggleSidebar?: boolean;
  vendorData?: Record<string, any>;
};

const Header = ({ setToggleSidebar, toggleSidebar }: HeaderProps) => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <header
        className={`kwii-bg-white w-100 kwii-p-3 kwii-mt-2 kwii-mb-10`}
        style={{ boxShadow: " 0px 4px 5px 0px rgba(27, 28, 30, 0.05)" }}
      >
        <div className="kwii-flex kwii-justify-between kwii-items-center w-100">
          <motion.div
            whileTap={{ scale: 0.7 }}
            className={'kwii-px-6 "kwii-pointer'}
            onClick={() => setToggleSidebar?.(!toggleSidebar)}
          >
            <Hamburger class={"kwii-pointer"} />
          </motion.div>

          <div
            className="kwii-flex kwii-justify-end kwii-items-center"
            style={{ gap: 20 }}
          >
            <div
              onClick={() => setIsDarkMode((prevState) => !prevState)}
              style={{ color: "#000" }}
            >
              {isDarkMode ? <LightIcon /> : <DarkIcon />}
            </div>
            <NotificationContainer />
            <UserDetails userData={{ email: "emmydollar98@gmail.com" }} />
          </div>
        </div>
      </header>
    </ConfigProvider>
  );
};

export default Header;
