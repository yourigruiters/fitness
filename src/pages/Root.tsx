import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="root">Root</div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
