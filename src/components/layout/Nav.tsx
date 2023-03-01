import classNames from "classnames";
import { FC } from "react";
import { FaThLarge, FaReact } from "react-icons/fa";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";

interface INavItem {
  title: string;
  link: string;
  icon: JSX.Element;
}

const NavItem: FC<INavItem> = ({ title, link, icon }) => {
  const { pathname } = useLocation();

  return (
    <Link to={link}>
      <li
        className={classNames(
          "flex flex-row items-center gap-x-3 cursor-pointer hover:text-white",
          {
            "text-white": pathname === link,
          }
        )}
      >
        {icon}
        <p>{title}</p>
      </li>
    </Link>
  );
};

const Nav = () => {
  const intl = useIntl();

  return (
    <nav className="w-full h-auto p-6">
      <ul className="flex flex-col gap-y-5 text-gray-400 text-sm">
        <NavItem
          title={intl.formatMessage({
            id: "navigation.dashboard",
          })}
          link="/dashboard"
          icon={<FaThLarge className="w-4 h-4" />}
        />
        <NavItem
          title={intl.formatMessage({
            id: "navigation.components",
          })}
          link="/components"
          icon={<FaReact className="w-4 h-4" />}
        />
      </ul>
    </nav>
  );
};

export default Nav;
