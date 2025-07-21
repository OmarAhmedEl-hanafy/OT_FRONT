import { Button, Input } from "@headlessui/react";
import clsx from "clsx";

function Search({placeholder}:any) {

    const iconSearch = <i className="fa-solid fa-search" ></i>

  return (
    <div className="relative">
      <Input
        className={clsx(
          "my-3 py-4 shadow-custom-dark pl-10 block w-full rounded-lg border-none bg-white  text-black/80 ",
          "focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-2 data-[focus]:outline-main-color"
        )}
        placeholder={placeholder}
      /> 
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">{iconSearch}</div>
      <Button className="absolute right-4 top-1/2 -translate-y-1/2 py-2 px-5 text-[14px] rounded-lg hover:bg-main-color transition-colors bg-main-color/75 text-white">{iconSearch} Search</Button>
    </div>
  );
}

export default Search;
