import axios from "axios";
import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "../utils";

const Nature = ({ id }: { id: string }) => {
  const [data, setData] = useState<{ decreasedStat: string; increasedStat: string; like: string; hate: string; moveBattleStyle: string[] }>({
    decreasedStat: "",
    increasedStat: "",
    like: "",
    hate: "",
    moveBattleStyle: [],
  });

  useEffect(() => {
    if (id) {
      axios
        .get("https://pokeapi.co/api/v2/nature/" + id)
        .then((res) => {
          console.log(res);
          const dataPokemon: typeof data = {
            decreasedStat: res.data?.decreased_stat?.name || "none",
            increasedStat: res.data?.increased_stat?.name || "none",
            like: res.data.likes_flavor?.name || "none",
            hate: res.data.hates_flavor?.name || "none",
            moveBattleStyle: res.data.move_battle_style_preferences.map((style: any) => style.move_battle_style.name),
          };
          setData(dataPokemon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="grid grid-cols-3 mt-2 mx-3 gap-2">
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Decreased Stat</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.decreasedStat)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Increased Stat</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.increasedStat)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Like Flavor</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.like)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Hate Flavor</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.hate)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Move Battle Style</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{data.moveBattleStyle.toString()}</p>
      </div>
    </div>
  );
};

export default Nature;
