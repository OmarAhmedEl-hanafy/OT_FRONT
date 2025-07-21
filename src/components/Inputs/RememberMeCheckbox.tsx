import { Checkbox, Typography } from "@material-tailwind/react";

interface CheckboxProps {
  checked: boolean;
  handleChange: () => void;
}

function RememberMeCheckbox({ checked, handleChange }: CheckboxProps) {
  return (
    <Checkbox
      label={
        <Typography
          color="blue-gray"
          className="flex font-medium text-[14px]"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          Remember me
        </Typography>
      }
      color="indigo"
      checked={checked}
      onChange={handleChange}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      crossOrigin={undefined}
    />
  );
}

export default RememberMeCheckbox;
