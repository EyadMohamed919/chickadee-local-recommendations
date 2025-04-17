import Image from "next/image";
import { NavBar } from "./components/navbar";
import {Recommendation} from "./components/Recommendation";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <NavBar/>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-pink-900 font-bold text-xl">Chickadee display nearby points of interest 
          (POIs) based on the user's location</p>
        <h2 className="text-pink-500 font-bold text-xl mt-4">Select Filter</h2>

        <div className="mt-4">
          <button className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 mr-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
            hover:bg-white hover:text-pink-700 hover:border-pink-500">Resteraunts</button>

          <button className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 mr-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
           hover:bg-white hover:text-pink-700 hover:border-pink-500">Cafes</button>

          <button className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 mr-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
           hover:bg-white hover:text-pink-700 hover:border-pink-500">Shops</button>

          <button className="bg-pink-900 pl-6 pr-6 pt-3 pb-3 mr-2 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
           hover:bg-white hover:text-pink-700 hover:border-pink-500">Parks</button>
        </div>
        
        
        <Recommendation />
      </div>
    </div>
  );
}
