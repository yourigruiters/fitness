import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Wobble from "../wobble/Wobble";
import Splitter from "../wobble/components/Splitter";
import { FaMoon, FaSun } from "react-icons/fa";
import { changeTheme, selectTheme } from "../../redux/slices/themeSlice";

interface IThemeSwitcher {}

const ThemeSwitcher: FC<IThemeSwitcher> = ({}) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className="w-full h-full" />;
      case "dark":
        return <FaMoon className="w-full h-full" />;
    }
  };

  const getThemeColor = () => {
    switch (theme) {
      case "light":
        return "!text-sun hover:text-sun";
      case "dark":
        return "!text-moon hover:!text-moon";
    }
  };

  const popoutContent = (
    <div className="flex flex-col gap-y-2 w-max h-auto">
      <Wobble
        active={theme === "light"}
        onClick={() => dispatch(changeTheme("light"))}
        customClassNames="!text-sun hover:text-sun"
      >
        <Splitter>
          <FaSun className="w-full h-full" />
          <p className="text-sm">Light</p>
        </Splitter>
      </Wobble>
      <Wobble
        active={theme === "dark"}
        onClick={() => dispatch(changeTheme("dark"))}
        customClassNames="!text-moon hover:!text-moon"
      >
        <Splitter>
          <FaMoon className="w-full h-full" />
          <p className="text-sm">Dark</p>
        </Splitter>
      </Wobble>
    </div>
  );

  return (
    <Wobble
      type="icon"
      popoutContent={popoutContent}
      customClassNames={getThemeColor()}
    >
      {getThemeIcon()}
    </Wobble>
  );
};

export default ThemeSwitcher;
