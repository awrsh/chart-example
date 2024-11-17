import BarChart from "@/components/common/BarChart";
import LineChart from "@/components/common/LineChart";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">داشبورد</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">نمودار ستونی</h2>
          <BarChart />
        </div>
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">نمودار خطی</h2>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
