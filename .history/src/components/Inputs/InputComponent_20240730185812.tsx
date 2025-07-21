/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Typography } from "@material-tailwind/react";

type Props = {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: { [key: string]: string };
};

function InputComponent({
  handleChange,
  type,
  name,
  label,
  placeholder,
  errors,
}: Props) {
  const settingInput = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    crossOrigin: "",
  };

  return (
    <div>
      <Input
        autoComplete="off" // Disable autocomplete here
        name={name}
        onChange={handleChange}
        label={label}
        placeholder={placeholder}
        type={type}
        className="focus:!border-main-color focus:!border-t-transparent"
        labelProps={{
          className:
            "peer-focus:before:!border-main-color peer-focus:after:!border-main-color peer-focus:!text-[14px]",
        }}
        required
        {...settingInput}
        error={errors?.[name] ? true : false}
      />

      {errors?.[name] && (
        <Typography
          placeholder={undefined}
          className="mt-2 flex items-center gap-1 text-[12px] font-normal text-red-600"
          {...settingInput}        >
          {errors[name]}
        </Typography>
      )}
    </div>
  );
}

export default InputComponent;
