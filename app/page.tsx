"use client";
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="uppercase font-bold pt-20 px-29 text-orange-400">
            best destination around the world
          </h1>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            Travel, enjoy{" "}
          </p>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            and live anew{" "}
          </p>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            and full life.
          </p>
        </div>
        <div>
          <img className="w-90 h-90 pt-20" src="/c.png" alt="photo" />
        </div>
      </div>
      <div className="pt-20">
        <p className="uppercase flex flex-col justify-center items-center  text-sm text-gray-600">
          category
        </p>
        <p className="flex flex-col justify-center items-center text-4xl text-blue-950 pt-2 font-bold">
          We Offer Best Services
        </p>
      </div>
    </div>
  );
}
