import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
export default function InputPhoneNumber({ handlechange, getCodCountry }: any) {
  const { countries } = useCountries();
  const [country, setCountry]: any = React.useState(230);
  const { name, flags, countryCallingCode } = countries[country];

  // const { name, flags, countryCallingCode } = countries.find(
  //   (obj: any) => obj.name === "Egypt"
  // );

  return (
    <div className="flex w-full">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>

        <MenuList
          className="max-h-[20rem] max-w-[18rem]"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {countries.map((country: any, index: any) => {
            return (
              <MenuItem
                key={country.name}
                value={country.name}
                className="flex items-center gap-2"
                onClick={() => {
                  setCountry(index);
                  getCodCountry(country.countryCallingCode);
                }}
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <img
                  src={country.flags.svg}
                  alt={country.name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {country.name}{" "}
                <span className="ml-auto">{country.countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>

      <div className="flex flex-col w-full">
        <Input
          name="phone"
          onChange={handlechange.handleChange}
          type="tel"
          className="md:max-w-[130px] lg:max-w-full rounded-l-none !border-t-blue-gray-200 focus:!border-main-color"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          crossOrigin={undefined}
          error={`${handlechange.errors.fname ? "true" : "false"}` === "true"}
          // success={
          //   `${handlechange.errors.fname ? "true" : "false"}` === "false"
          // }
        />

        <Typography
          color="gray"
          className="mt-2 flex items-center gap-1 text-[12px] font-normal text-red-600"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {handlechange.errors.phone}
        </Typography>
      </div>
    </div>
  );
}
