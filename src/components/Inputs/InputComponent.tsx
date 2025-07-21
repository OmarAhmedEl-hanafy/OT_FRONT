import { Input, Typography } from "@material-tailwind/react";

type Props = {
  label?: string;
  placeholder: string;
  value: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangtextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errors?: string; // Accept individual string error instead of Record
  icon?: JSX.Element;
};

function InputComponent({
  handleChange,
  type,
  name,
  value,
  label,
  placeholder,
  errors,
  icon,
}: Props) {
  const settingInput = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    crossOrigin: "",
  };

  return (
    <div className="relative">
      <Input
        value={value}
        autoComplete="off"
        name={name}
        onChange={handleChange}
        label={label}
        placeholder={placeholder}
        type={type}
        required
        {...settingInput}
        error={!!errors} // Check if there's any error (boolean)
      />
      {/* Conditionally render the icon if it exists */}
      {icon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      {errors && (
        <Typography
          placeholder={undefined}
          className="mt-2 flex items-center gap-1 text-[12px] font-normal text-red-600"
          {...settingInput}
        >
          {errors} {/* Display the actual error string */}
        </Typography>
      )}
    </div>
  );
}

export default InputComponent;
