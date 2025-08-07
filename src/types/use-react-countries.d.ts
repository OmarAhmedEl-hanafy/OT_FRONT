// declare module 'use-react-countries' {
//   interface Country {
//     name: string;
//     flag: string;
//     countryCode: string;
//     dialCode: string;
//   }

//   function useCountries(): {
//     countries: Country[];
//     getCountryByCode: (code: string) => Country | undefined;
//     getFilteredCountries: (query: string) => Country[];
//   };

//   export default useCountries;
// }

declare module 'use-react-countries' {
  interface Country {
    name: string;
    flags: {
      svg: string;
    };
    countryCallingCode: string;
  }

  export function useCountries(): {
    countries: Country[];
  };
}