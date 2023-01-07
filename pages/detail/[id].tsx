import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import About from "../../components/About";
import BaseStat from "../../components/BaseState";
import Moves from "../../components/Moves";
import Nature from "../../components/Nature";

export default function Home() {
  const router = useRouter();

  const [menuActive, setMenuActive] = useState<string>("about");

  const { id, name, ability, nature } = router.query;

  return (
    <div className="relative flex flex-col flex-col-2 h-[100vh]">
      <div className="bg-red-500 basis-1/2 p-5">
        <div className="flex items-center">
          <div className="grow flex flex-col gap-3">
            <p className="text-2xl font-bold text-white">{name}</p>
            <div className="flex gap-2 items-center justify-start">
              <div className="bg-white bg-opacity-30 rounded-xl p-1 px-2 w-fit">
                <p className="text-xs text-white font-bold">{ability}</p>
              </div>
              <div className="bg-white bg-opacity-30 rounded-xl p-1 px-2 w-fit">
                <p className="text-xs text-white font-bold">{nature}</p>
              </div>
            </div>
          </div>
          <p className="text-base font-bold text-white">#{String(id).padStart(3, "0")}</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] pointer-events-none absolute bottom-1/2 translate-y-[25%] right-1/2 translate-x-1/2 z-20">
        <Image alt="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} fill />
      </div>
      <div className="w-[300px] h-[300px] pointer-events-none opacity-[0.6] absolute bottom-1/2 right-0 translate-x-[50px] translate-y-[50px] z-10">
        <Image alt="icobg" src="/pokeball.png" fill sizes="1" />
      </div>
      <div className="bg-white basis-1/2 rounded-t-3xl -mt-5 overflow-hidden p-3 flex flex-col gap-3">
        <div className="flex mt-4 mx-auto">
          <div
            onClick={() => {
              setMenuActive("about");
            }}
            className={`"flex items-center justify-center p-3 border-b ${
              menuActive == "about" ? "border-red-500" : "border-b-white"
            }  hover:border-b-green-500`}
          >
            <p className={`text-base font-bold ${menuActive == "about" ? "text-gray-900" : "text-gray-500"}`}>About</p>
          </div>
          <div
            onClick={() => {
              setMenuActive("nature");
            }}
            className={`"flex items-center justify-center p-3 border-b ${
              menuActive == "nature" ? "border-red-500" : "border-b-white"
            }  hover:border-b-green-500`}
          >
            <p className={`text-base font-bold ${menuActive == "nature" ? "text-gray-900" : "text-gray-500"}`}>Nature</p>
          </div>
          <div
            onClick={() => {
              setMenuActive("base");
            }}
            className={`"flex items-center justify-center p-3 border-b ${
              menuActive == "base" ? "border-red-500" : "border-b-white"
            }  hover:border-b-green-500`}
          >
            <p className={`text-base font-bold ${menuActive == "base" ? "text-gray-900" : "text-gray-500"}`}>Base Stat</p>
          </div>
          <div
            onClick={() => {
              setMenuActive("moves");
            }}
            className={`"flex items-center justify-center p-3 border-b ${
              menuActive == "moves" ? "border-red-500" : "border-b-white"
            }  hover:border-b-green-500`}
          >
            <p className={`text-base font-bold ${menuActive == "moves" ? "text-gray-900" : "text-gray-500"}`}>Moves</p>
          </div>
        </div>
        {menuActive == "about" ? (
          <About id={id as string} />
        ) : menuActive == "nature" ? (
          <Nature id={id as string} />
        ) : menuActive == "base" ? (
          <BaseStat id={id as string} />
        ) : menuActive == "moves" ? (
          <Moves id={id as string} />
        ) : null}
      </div>
    </div>
  );
}
