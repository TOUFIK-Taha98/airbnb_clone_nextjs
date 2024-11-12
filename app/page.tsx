import Banner from "./components/Banner";
import ExploreNearby from "./components/Explore/ExploreNearby";
import LiveSection from "./components/LiveSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <ExploreNearby />
      <LiveSection />
    </main>
  );
}
