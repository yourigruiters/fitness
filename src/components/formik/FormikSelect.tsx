import { useField } from "formik";
import { FC } from "react";
import FormikError from "./FormikError";

interface IFormikSelect {
  label?: string;
  name: string;
  must?: boolean;
  options: Array<{
    value: number | string;
    name: string;
  }>;
  defaultstring?: string;
}

const FormikSelect: FC<IFormikSelect> = (props) => {
  const [field, meta] = useField(props);

  const { label, name, must, options, defaultstring } = props;

  return (
    <div className="flex flex-col justify-center w-full h-full">
      {label && (
        <label htmlFor={name}>
          {label} {must && <span className="text-red text-xs">*</span>}
        </label>
      )}
      <select
        {...field}
        className="w-full h-full border border-gray-200 rounded-sm p-2 text-sm"
        id={name}
      >
        <option disabled value="">
          {defaultstring}
        </option>
        {options &&
          options.map((option, key: number) => (
            <option value={option.value} key={key}>
              {option.name}
            </option>
          ))}
      </select>
      {meta.touched && meta.error ? <FormikError error={meta.error} /> : null}
    </div>
  );
};

export default FormikSelect;
