import { useField } from "formik";
import { FC } from "react";
import FormikError from "./FormikError";

interface IFormikCheckbox {
  label: string | JSX.Element;
  name: string;
}

const FormikCheckbox: FC<IFormikCheckbox> = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  const { name, label } = props;

  return (
    <div>
      <div className="flex gap-x-2 text-xs text-gray-600">
        <input
          type="checkbox"
          {...field}
          {...props}
          id={name}
          className="cursor-pointer"
        />
        {typeof label === "string" ? (
          <label htmlFor={name} className="cursor-pointer">
            {label}
          </label>
        ) : (
          label
        )}
      </div>
      {meta.touched && meta.error ? (
        <FormikError error={meta.error} classNames="!pl-6" />
      ) : null}
    </div>
  );
};

export default FormikCheckbox;
