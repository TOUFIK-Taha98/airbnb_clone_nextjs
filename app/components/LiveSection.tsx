import { LiveData } from "@/app/types/app";
import { getLive } from "@/app/utils/api";
import MainHeading from "@/app/components/MainHeading";
import LiveCard from "@/app/components/Cards/LiveCard";

const LiveSection = async () => {
  const liveData: LiveData = await getLive();
  console.log(liveData);

  return (
    <section className="pt-12">
      <div className="container">
        <MainHeading title="Live Anywhere" />
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {liveData.map((live) => (
            <LiveCard key={live.title} title={live.title} img={live.img} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LiveSection;
