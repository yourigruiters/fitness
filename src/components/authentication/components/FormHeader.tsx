import { FC } from "react";

interface IFormHeader {
  title: string;
  description: string;
}

const FormHeader: FC<IFormHeader> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center gap-y-1 text-center md:gap-y-2">
      <p className="font-bold text-lg md:text-3xl">{title}</p>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default FormHeader;
