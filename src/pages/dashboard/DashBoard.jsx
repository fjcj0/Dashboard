import Header from "../../component/header/Header";
import SidBar from "../../component/sidbar/SidBar";

const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <SidBar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 flex flex-col gap-6">
          <div className="bg-[#1c1f2e] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4">Card 1</h2>
            <p className="text-gray-400"></p>
          </div>

          <div className="bg-[#1c1f2e] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4">Card 2</h2>
            <p className="text-gray-400"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
