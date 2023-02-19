import { useField } from "formik";
import { FC } from "react";
import FormikError from "./FormikError";

interface IFormikInput {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  must?: boolean;
}

const FormikInput: FC<IFormikInput> = (props) => {
  const [field, meta] = useField(props);

  const { label, name, placeholder, must, type } = props;

  return (
    <div className="flex flex-col justify-center w-full h-full">
      {label && (
        <label htmlFor={name}>
          {label} {must && <span className="text-red text-xs">*</span>}
        </label>
      )}
      <input
        {...field}
        placeholder={placeholder}
        className="w-full h-full border border-gray-200 rounded-md p-3 text-sm"
        id={name}
        type={type}
      />
      {meta.touched && meta.error ? <FormikError error={meta.error} /> : null}
    </div>
  );
};

export default FormikInput;
