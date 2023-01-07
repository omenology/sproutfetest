import axios from "axios";
import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "../utils";

const Moves = ({ id }: { id: string }) => {
  const [data, setData] = useState<{ name: string; accuracy: number; power: number; damageClass: string; type: string }>({
    name: "",
    accuracy: 0,
    power: 0,
    damageClass: "",
    type: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get("https://pokeapi.co/api/v2/move/" + id)
        .then((res) => {
          console.log(res);
          const dataPokemon: typeof data = {
            name: res.data.name,
            accuracy: res.data.accuracy,
            power: res.data.power,
            damageClass: res.data.damage_class.name,
            type: res.data.type.name,
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
        <p className="text-base font-bold text-gray-500">Name</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.name)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Type</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.type)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Accuracy</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">{data.accuracy}</p>
        <div className="grow">
          <div className={`bg-green-500" h-1`} style={{ width: data.accuracy + "%" }} />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Power</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">{data.power}</p>
        <div className="grow">
          <div className={`bg-green-500" h-1`} style={{ width: data.power + "%" }} />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Damage Class</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.damageClass)}</p>
      </div>
    </div>
  );
};

export default Moves;
