// import React, { useState } from "react";
// import { useCountries } from "use-react-countries";
// import {
//   Input,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
//   Typography,
// } from "@material-tailwind/react";

// const settingInput = {
//   onPointerEnterCapture: () => {},
//   onPointerLeaveCapture: () => {},
//   crossOrigin: "",
// };

// interface Country {
//   name: string;
//   flags: {
//     svg: string;
//   };
//   countryCallingCode: string;
// }

// interface HandleChange {
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   errors: {
//     phone?: string;
//   };
// }

// interface InputPhoneNumberProps {
//   handlechange: HandleChange;
//   getCodCountry: (code: string) => void;
// }

// export default function InputPhoneNumber({
//   handlechange,
//   getCodCountry,
// }: InputPhoneNumberProps) {
//   const { countries } = useCountries();
//   const [countryIndex, setCountryIndex] = useState<number>(0);
//   const selectedCountry = countries[countryIndex];

//   return (
//     <div className="flex w-full">
//       <Menu placement="bottom-start">
//         <MenuHandler>
//           <Button
//             ripple={false}
//             variant="text"
//             color="blue-gray"
//             className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
//           >
//             <img
//               src={selectedCountry.flags.svg}
//               alt={selectedCountry.name}
//               className="h-4 w-4 rounded-full object-cover"
//             />
//             {selectedCountry.countryCallingCode}
//           </Button>
//         </MenuHandler>

//         <MenuList
//           className="max-h-[20rem] max-w-[18rem]"
//           placeholder={undefined}
//           {...settingInput}
//         >
//           {countries.map((country: Country, index: number) => (
//             <MenuItem
//               key={country.name}
//               className="flex items-center gap-2"
//               onClick={() => {
//                 setCountryIndex(index);
//                 getCodCountry(country.countryCallingCode);
//               }}
//               placeholder={undefined}
//               onPointerEnterCapture={undefined}
//               onPointerLeaveCapture={undefined}
//             >
//               <img
//                 src={country.flags.svg}
//                 alt={country.name}
//                 className="h-5 w-5 rounded-full object-cover"
//               />
//               {country.name}
//               <span className="ml-auto">{country.countryCallingCode}</span>
//             </MenuItem>
//           ))}
//         </MenuList>
//       </Menu>

//       <div className="flex flex-col w-full">
//         <Input
//           name="phone"
//           onChange={handlechange.handleChange}
//           type="tel"
//           className="md:max-w-[130px] lg:max-w-full rounded-l-none !border-t-blue-gray-200 focus:!border-main-color"
//           labelProps={{
//             className: "before:content-none after:content-none",
//           }}
//           error={!!handlechange.errors.phone}
//           {...settingInput}
//           crossOrigin={undefined}
//         />

//         {handlechange.errors.phone && (
//           <Typography
//             color="gray"
//             className="mt-2 flex items-center gap-1 text-[12px] font-normal text-red-600"
//             placeholder={undefined}
//             {...settingInput}
//           >
//             {handlechange.errors.phone}
//           </Typography>
//         )}
//       </div>
//     </div>
//   );
// }
