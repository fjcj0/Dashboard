import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-semibold">Good Morning 👋</h1>
          <p className="text-gray-400 text-sm">Welcome back</p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-[350px]">
            <input
              type="text"
              placeholder="Find Something..."
              className="w-full bg-[#1c1f2e] text-white placeholder-gray-400 
              rounded-full py-2 pl-4 pr-10 outline-none border border-gray-700 
              focus:border-orange-400 transition"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="bg-[#1c1f2e] p-2 rounded-full cursor-pointer hover:bg-[#2a2d3e] transition">
              <Bell className="text-white w-5 h-5" />
            </div>

            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full object-cover border border-gray-600"
            />
            <span className="text-white text-sm">Ahmed</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
