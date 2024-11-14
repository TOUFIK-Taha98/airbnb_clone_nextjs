import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResults } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/Cards/ListingCard";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const SearchResultData: SearchResultData = await getSearchResults();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section className="pt-14">
          <div className="container">
            <p className="text-xs">
              300+ days - {range} - for {numOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6 ">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              {filters.map((filter) => (
                <button type="button" className="filter-btn" key={filter}>
                  {filter}
                </button>
              ))}
            </div>

            {SearchResultData.map((data) => (
              <ListingCard
                key={data.title}
                img={data.img}
                title={data.title}
                location={data.location}
                description={data.description}
                price={data.price}
                total={data.total}
                star={data.star}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default SearchResult;
