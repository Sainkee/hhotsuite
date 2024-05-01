import { featureSection } from "../constants";

export default function Featuresection() {
  return (
    <div className="flex  justify-around text-center my-20">
      {featureSection.map((x, index) => (
        <div key={index} className=" flex flex-col items-center justify-center">
          <img src={x.icon} alt="" width={"150px"}  />

          <p className=" my-4 font-bold text-xl">+{x.count}</p>

          <p className="text-xl  text-neutral-500">{x.description}</p>
        </div>
      ))}
    </div>
  );
}
