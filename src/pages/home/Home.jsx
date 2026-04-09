import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-white">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1e293b] rounded-2xl p-4">
          <h2 className="mb-4 text-lg">Live Location</h2>
          <img
            className="rounded-xl w-full"
            src="https://via.placeholder.com/400x200"
            alt=""
          />
        </div>

        <div className="relative flex items-center justify-between bg-gradient-to-r from-gray-200 to-yellow-100 rounded-2xl p-6 overflow-hidden">
          <div className="text-black z-10">
            <h2 className="text-xl font-bold mb-2">Ford Mustang EGT</h2>
            <p className="text-sm">4951 cc, 8 Cylinders, 4 Valves</p>
          </div>

          <div className="absolute right-0 bottom-0">
            <img
              className="w-[300px] object-contain drop-shadow-2xl"
              src="src\images\every-detail-of-a-sleek-modern-car-captured-in-close-up-photo (1).jpg"
              alt="car"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#1e293b] rounded-2xl p-4">
          <h2 className="mb-4">Top Songs</h2>

          <div className="bg-black/30 rounded-xl p-4">
            <h3 className="text-lg font-bold">Beat The Drill!!!</h3>
            <p className="text-sm text-gray-400">Akon</p>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-2xl p-4">
          <h2 className="mb-4">Battery</h2>

          <div className="flex gap-4">
            <div className="bg-black/30 p-4 rounded-xl flex-1 text-center">
              780 km
            </div>
            <div className="bg-green-400 text-black p-4 rounded-xl flex-1 text-center">
              54 min left
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
