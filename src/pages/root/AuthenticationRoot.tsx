import { Outlet, useNavigate } from "react-router-dom";
import ImageLogo from "../../assets/logo/logo.png";
import ImageBackground from "../../assets/background.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import AuthLanguageSwitcher from "../../components/switchers/AuthLanguageSwitcher";

const AuthenticationRoot = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <section className="flex flex-col items-center w-full h-screen bg-white md:flex-row md:items-stretch">
      <div
        className="flex flex-row justify-center items-center w-full p-4 bg-blue-900 md:order-last"
        style={{
          backgroundImage: `url(${ImageBackground})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="transition-all w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32">
          <img src={ImageLogo} alt="logo" className="w-auto h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="transition-all font-bold text-white text-xs md:text-xl md:font-normal lg:text-3xl">
            TrackMy
          </h2>
          <h2 className="transition-all font-bold text-white text-xl -mt-1 md:text-3xl lg:text-5xl">
            Fitness
          </h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[600px] gap-y-10 w-full h-full p-10 md:order-1 md:justify-center md:p-16">
        <Outlet />
        <div className="flex justify-center">
          <AuthLanguageSwitcher />
        </div>
      </div>
    </section>
  );
};

export default AuthenticationRoot;
