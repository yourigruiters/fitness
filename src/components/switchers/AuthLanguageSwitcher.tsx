import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeLocale, selectLocale } from "../../redux/slices/localeSlice";
import Wobble from "../wobble/Wobble";
import FlagEN from "../../assets/flags/flagEN.png";
import FlagNL from "../../assets/flags/FlagNL.png";
import Splitter from "../wobble/components/Splitter";
import { useIntl } from "react-intl";

interface IAuthLanguageSwitcher {}

const AuthLanguageSwitcher: FC<IAuthLanguageSwitcher> = ({}) => {
  const intl = useIntl();
  const locale = useAppSelector(selectLocale);
  const dispatch = useAppDispatch();

  const getLocaleFlag = () => {
    switch (locale) {
      case "en":
        return <img src={FlagEN} alt="flag" className="h-5" />;
      case "nl":
        return <img src={FlagNL} alt="flag" className="h-5" />;
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
          <p className="text-sm">
            {intl.formatMessage({
              id: "switcher.english",
            })}
          </p>
        </Splitter>
      </Wobble>
      <Wobble
        active={locale === "nl"}
        onClick={() => dispatch(changeLocale("nl"))}
      >
        <Splitter>
          <img src={FlagNL} alt="flag" className="w-5 h-5" />
          <p className="text-sm">
            {intl.formatMessage({
              id: "switcher.dutch",
            })}
          </p>
        </Splitter>
      </Wobble>
    </div>
  );

  return (
    <Wobble popoutContent={popoutContent} customClassNames="!h-10">
      <Splitter>
        {getLocaleFlag()}
        <p>{locale === "en" ? "English" : "Dutch"}</p>
      </Splitter>
    </Wobble>
  );
};

export default AuthLanguageSwitcher;
