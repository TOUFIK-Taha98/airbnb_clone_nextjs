import ExploreCard from "@/app/components/Cards/ExploreCard";
import { ExploreData } from "@/app/types/app";
import { getExplore } from "@/app/utils/api";
import MainHeading from "@/app/components/MainHeading";

const ExploreNearby = async () => {
  console.log("Entering ExploreNearby");

  const exploreData: ExploreData = await getExplore();

  console.log(exploreData);

  return (
    <section className="ml-6 pt-6">
      <MainHeading title="Explore Nearby" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map((item) => (
          <ExploreCard
            key={item.img}
            img={item.img}
            distance={item.distance}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};
export default ExploreNearby;
