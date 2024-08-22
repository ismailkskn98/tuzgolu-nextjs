import { FC } from "react";
import { useField } from "formik";
import { RiMessage2Fill } from "react-icons/ri";
// import './contact.css';

type CustomTextareaProps = {
  id: string;
  name: string;
  label: string;
};

const CustomTextarea: FC<CustomTextareaProps> = (props) => {
  const [field, { error, touched }] = useField(props);

  return (
    <>
      <div className="form-item relative col-span-2">
        <textarea
          {...field}
          {...props}
          required
          className={`px-3 py-4 w-full min-h-40 resize-none outline-none rounded border bg-transparent text-xs text-dark-gray dark:text-gray-300 ${
            error && touched ? "border-light-orange" : "dark:border-gray-600 border-gray-300"
          }`}
        />
        <label
          className="absolute transition-all top-4 left-4 text-[13px] px-2 tracking-wide bg-white dark:bg-dark-black text-dark-gray dark:text-gray-300"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <span
          className={`absolute top-4 right-4 text-[18px] tracking-wide ${
            error && touched ? "text-light-orange" : "text-dark-gray dark:text-gray-300"
          }`}
        >
          <RiMessage2Fill />
        </span>
        {error && touched && (
          <div className="text-xs text-light-orange absolute -top-5 right-0">{error}</div>
        )}
      </div>
    </>
  );
};

export default CustomTextarea;
