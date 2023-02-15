import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-10">Root</div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
