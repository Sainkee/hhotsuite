import { heroSection } from "../constants"

export default function HeroSection() {
  return <div className="flex flex-col justify-center text-center bg-blue-950 text-white py-14 items-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold capitalize tracking-wide lg:7xl">
        {heroSection.title}
    </h1>
    <h2 className="text-sm md:text-xl md:w-1/2 w-2/3 font-semibold py-10 capitalize tracking-wide lg:4xl">
        {heroSection.description}
    </h2>
    <a href="#" className="bg-green-600 px-3 py-2 rounded-sm capitalize">{heroSection.actioncall}</a>

  </div>;
}
