import { Input, Typography } from "@material-tailwind/react";

type props = {
    label: string;
    placeholder:string;
    name:string;
    type:string;
    handlechange:any;
    error?:any;
}

function InputComponent({ handlechange, type, name, label, placeholder,error }: props) {
  const settingInput = {
    onPointerEnterCapture: "()=>{}",
    onPointerLeaveCapture: "()=>{}",
    crossOrigin: "",
  };

  return (
    <div className="">
      <Input
        name={name}
        onChange={handlechange.handleChange}
        label={label}
        placeholder={placeholder}
        type={type}
        className=" focus:!border-main-color focus:!border-t-transparent "
        labelProps={{
          className:
            "peer-focus:before:!border-main-color peer-focus:after:!border-main-color peer-focus:!text-[14px]",
        }}
        required
        {...settingInput}
        error={`${handlechange.errors.name ? "true" : "false"}` === "true"}
        // success={`${handlechange.errors.name ? "true" : "false"}` === "false"}
      />

      <Typography
        color="gray"
        className="mt-2 flex items-center gap-1 text-[12px] font-normal text-red-600"
        placeholder={undefined}
        {...settingInput}
      >
        {error}
      </Typography>
    </div>
  );
}

export default InputComponent;
