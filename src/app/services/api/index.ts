
interface ICountryOperators {
  phone_view: string
}

interface ICountryPricePerDay {
  amount: string
  currency: string
}


export interface ICountry {
  country: string,
  iso: string,
  id: string,
  operators: ICountryOperators[],
  url: string
  price_per_day: ICountryPricePerDay
}


export const getCountries = async (language: string) => {
  try {
    const response = await fetch(
      `https://api2.yesim.co.uk/countries_for_sale?lang=${language}`,
    );
    if (!response.ok) {
      console.error('Failed to fetch categories', response.statusText);
      return [];
    }
    const result = await response.json();

    return result[0] as ICountry[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
