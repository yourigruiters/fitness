import { Outlet } from "react-router-dom";
import ImageLogo from "../../assets/logo/logo.png";

const AuthenticationRoot = () => {
  return (
    <section className="flex flex-col w-full h-screen bg-white md:flex-row">
      <div className="flex flex-row justify-center items-center w-full p-4 bg-blue-900 md:order-last">
        <div className="w-12 h-12">
          <img src={ImageLogo} alt="logo" className="w-auto h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-white text-xs">TrackMy</h2>
          <h2 className="font-bold text-white text-xl -mt-1">Fitness</h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[600px] w-full h-full p-16 md:order-1 md:justify-center md:py-0">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthenticationRoot;
