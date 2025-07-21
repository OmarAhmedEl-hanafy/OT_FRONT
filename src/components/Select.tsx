import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function Select({ placeholder }: any) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[-1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-2/3 ">
      <Combobox
        value={selected}
        onChange={(value: any) => setSelected(value)}
        onClose={() => setQuery("")}
        // __demoMode
      >
        <div className="relative text-black/50 shadow-custom-dark ">
          <ComboboxInput
            className={clsx(
              "w-full py-4 rounded-lg border-none bg-white text-black pr-8 pl-12 text-sm/6",
              "focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-2 data-[focus]:outline-main-color"
            )}
            displayValue={(person: any) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <i className="fa-solid fa-chevron-down"></i>{" "}
          </ComboboxButton>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 ">
            <i className="fa-solid fa-eye"></i>
          </div>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl bg-main-color/50 backdrop-blur-sm p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <i className="fa-solid fa-check invisible size-4 text-white fill-white group-data-[selected]:visible"></i>
              <div className="text-sm/6 text-white">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
