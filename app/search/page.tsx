import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
const SearchResult = ({
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
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>Hello</main>
      <Footer />
    </>
  );
};
export default SearchResult;
