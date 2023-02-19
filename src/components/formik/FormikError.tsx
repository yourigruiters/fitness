import { FC } from "react";

interface IFormikError {
  error: string;
  classNames?: string;
}

const FormikError: FC<IFormikError> = ({ error, classNames }) => {
  return (
    <div className={` ${classNames} text-red-700 text-xs pl-1 mt-1`}>
      {error}
    </div>
  );
};

export default FormikError;
