import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeLocale, selectLocale } from "../../redux/slices/localeSlice";
import Wobble from "../wobble/Wobble";
import FlagEN from "../../assets/flags/flagEN.png";
import FlagNL from "../../assets/flags/FlagNL.png";
import Splitter from "../wobble/components/Splitter";

interface ILanguageSwitcher {}

const LanguageSwitcher: FC<ILanguageSwitcher> = ({}) => {
  const locale = useAppSelector(selectLocale);
  const dispatch = useAppDispatch();

  const getLocaleFlag = () => {
    switch (locale) {
      case "en":
        return <img src={FlagEN} alt="flag" />;
      case "nl":
        return <img src={FlagNL} alt="flag" />;
    }
  };

  const popoutContent = (
    <div className="flex flex-col gap-y-2 w-max h-auto">
      <Wobble
        active={locale === "en"}
        onClick={() => dispatch(changeLocale("en"))}
      >
        <Splitter>
          <img src={FlagEN} alt="flag" className="w-5 h-5" />
          <p className="text-sm">English</p>
        </Splitter>
      </Wobble>
      <Wobble
        active={locale === "nl"}
        onClick={() => dispatch(changeLocale("nl"))}
      >
        <Splitter>
          <img src={FlagNL} alt="flag" className="w-5 h-5" />
          <p className="text-sm">Dutch</p>
        </Splitter>
      </Wobble>
    </div>
  );

  return (
    <Wobble type="icon" popoutContent={popoutContent}>
      {getLocaleFlag()}
    </Wobble>
  );
};

export default LanguageSwitcher;
