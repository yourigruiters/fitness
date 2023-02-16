import { FC } from "react";
import { FaBars } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import ImageJaneDoe from "../../assets/avatars/avatar-jane-doe.jpg";
import ImageLogo from "../../assets/logo/logo.png";
import { useAppDispatch } from "../../redux/hooks";
import { changeLocale } from "../../redux/slices/localeSlice";
import { TLocale } from "../../types/locale";

interface IHeader {
  sidebarIsOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

const Header: FC<IHeader> = ({ sidebarIsOpen, toggleSidebar }) => {
  const dispatch = useAppDispatch();

  return (
    <header className="transition-all sticky z-40 top-0 left-0 flex justify-between items-center w-full h-16 p-4 shadow-lg text-gray-500 bg-white md:h-20">
      <div className="flex flex-row items-center gap-x-2">
        <FaBars
          className="text-xl sm:hidden"
          onClick={() => toggleSidebar(!sidebarIsOpen)}
        />
        <div className="flex w-12 h-12 sm:hidden">
          <img src={ImageLogo} alt="Logo - Fitness" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 w-auto h-full">
        <div className="">
          <select
            onChange={(e) =>
              dispatch(changeLocale(e.currentTarget.value as TLocale))
            }
          >
            <option value="en">English</option>
            <option value="nl">Dutch</option>
          </select>
        </div>
        <div className="">
          <p className="">
            <FormattedMessage
              id="navigation.components"
              defaultMessage="Edit the files and save to reload"
            />
          </p>
        </div>
        <div className="w-auto h-full rounded-md overflow-hidden">
          <img
            src={ImageJaneDoe}
            alt="Avatar - Jane Doe"
            className="w-full h-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
