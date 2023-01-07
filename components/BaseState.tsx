const BaseStat = () => {
  return (
    <div className="grid grid-cols-3 mt-2 mx-3 gap-2">
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">HP</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">80</p>
        <div className="grow">
          <div className="bg-red-500 w-[80%] h-1" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Attack</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">80</p>
        <div className="grow">
          <div className="bg-red-500 w-[80%] h-1" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Defense</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">80</p>
        <div className="grow">
          <div className="bg-green-500 w-[80%] h-1" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Sp.Atk</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">80</p>
        <div className="grow">
          <div className="bg-red-500 w-[80%] h-1" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Sp. Def</p>
      </div>
      <div className="flex items-center justify-start col-span-2 gap-3">
        <p className="text-base font-bold text-gray-900">80</p>
        <div className="grow">
          <div className="bg-green-500 w-[80%] h-1" />
        </div>
      </div>
    </div>
  );
};

export default BaseStat;
