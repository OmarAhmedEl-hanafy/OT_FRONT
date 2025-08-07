// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Input, Typography } from "@material-tailwind/react";
// import { useState } from "react";

// type props = {
//   value: string;
//   label: string;
//   placeholder: string;
//   name: string;
//   handlechange: any;
//   error?: any;
// };

// function InputPass({
//   handlechange,
//   name,
//   label,
//   placeholder,
//   error,
//   value,
// }: props) {
//   const [viewPass, setViewPass] = useState(false);

//   const settingInput = {
//     onPointerEnterCapture: "()=>{}",
//     onPointerLeaveCapture: "()=>{}",
//     crossOrigin: "",
//   };

//   return (
//     <div>
//       <Input
//         value={value}
//         name={name}
//         onChange={handlechange.handleChange}
//         type={`${viewPass ? "text" : "password"}`}
//         label={label}
//         className=" focus:!border-main-color focus:!border-t-transparent "
//         labelProps={{
//           className:
//             "peer-focus:before:!border-main-color peer-focus:after:!border-main-color peer-focus:!text-[14px]",
//         }}
//         size="lg"
//         icon={
//           <button
//             type="button"
//             onClick={() => {
//               setViewPass(!viewPass);
//             }}
//           >
//             <i className={`fa-solid fa-${viewPass ? "eye" : "eye-slash"}`} />
//           </button>
//         }
//         required
//         {...settingInput}
//         error={`${handlechange.errors.password ? "true" : "false"}` === "true"}
//         // success={
//         //   `${handlechange.errors.password ? "true" : "false"}` === "false"
//         // }
//       />

//       <Typography
//         color="gray"
//         className="mt-2 flex items-center gap-1 font-normal text-[10px] text-red-600"
//         placeholder={placeholder}
//         {...settingInput}
//       >
//         {error}
//       </Typography>
//     </div>
//   );
// }

// export default InputPass;

import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

type Props = {
  value: string;
  label: string;
  placeholder: string;
  name: string;
  handlechange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

function InputPass({
  handlechange,
  name,
  label,
  placeholder,
  error,
  value,
}: Props) {
  const [viewPass, setViewPass] = useState(false);

  const settingInput = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    crossOrigin: "",
  };

  return (
    <div>
      <Input
        value={value}
        name={name}
        onChange={handlechange}
        type={viewPass ? "text" : "password"}
        label={label}
        className="focus:!border-main-color focus:!border-t-transparent"
        labelProps={{
          className:
            "peer-focus:before:!border-main-color peer-focus:after:!border-main-color peer-focus:!text-[14px]",
        }}
        size="lg"
        icon={
          <button
            type="button"
            onClick={() => setViewPass(!viewPass)}
            aria-label={viewPass ? "Hide password" : "Show password"}
          >
            <i className={`fa-solid fa-${viewPass ? "eye" : "eye-slash"}`} />
          </button>
        }
        required
        error={!!error}
        crossOrigin={undefined} // أو "" أو "anonymous" أو "use-credentials"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />

      {error && (
        <Typography
          color="gray"
          className="mt-2 flex items-center gap-1 font-normal text-[10px] text-red-600"
          placeholder={placeholder}
          {...settingInput}
        >
          {error}
        </Typography>
      )}
    </div>
  );
}

export default InputPass;
