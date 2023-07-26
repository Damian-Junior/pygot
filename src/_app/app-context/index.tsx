"use client"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AppProviderPropType = {
  children: ReactNode;
};

type AppContextPropType = {
  setToggleSidebar: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: boolean;
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};
export const AppContext = createContext<AppContextPropType>({
  toggleSidebar: false,
  setToggleSidebar: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const AppProvider = (props: AppProviderPropType) => {
  const { children } = props;

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const values = {
    toggleSidebar,
    setToggleSidebar,
    setIsDarkMode,
    isDarkMode,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
