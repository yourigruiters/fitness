import { FC } from "react";
import Wobble from "../wobble/Wobble";
import ImageJaneDoe from "../../assets/avatars/avatar-jane-doe.jpg";

interface IAccountSwitcher {}

const AccountSwitcher: FC<IAccountSwitcher> = ({}) => {
  const popoutContent = (
    <div className="flex flex-col gap-y-2 w-max h-auto p-2">
      <div className="flex flex-row items-center gap-x-3 w-full h-auto pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-md overflow-hidden">
          <img
            src={ImageJaneDoe}
            alt="Avatar - Jane Doe"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-black">Jane Doe</p>
          <p className="text-sm">janedoe@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-0 w-full h-auto pb-2 border-b border-gray-100">
        <Wobble customClassNames="!p-2 text-black">
          <p>My Profile</p>
        </Wobble>
        <Wobble customClassNames="!p-2 text-black">
          <p>My Workouts</p>
        </Wobble>
      </div>
      <div className="flex flex-col items-center gap-y-0 w-full h-auto">
        <Wobble customClassNames="!p-2 text-black">
          <p>My Settings</p>
        </Wobble>
        <Wobble customClassNames="!p-2 text-black hover:!text-red-800">
          <p>Logout</p>
        </Wobble>
      </div>
    </div>
  );

  return (
    <Wobble noPadding popoutContent={popoutContent}>
      <div className="w-12 h-12 rounded-md overflow-hidden">
        <img
          src={ImageJaneDoe}
          alt="Avatar - Jane Doe"
          className="w-full h-full"
        />
      </div>
    </Wobble>
  );
};

export default AccountSwitcher;
