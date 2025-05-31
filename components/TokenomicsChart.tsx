"use client";
import { constants } from "@/lib/constants";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function TokenomicsChart() {
  return (
    <div className=" max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Tokenomics Distribution
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={constants.tokenomicsData}
            dataKey="percentage"
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {constants.tokenomicsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.chartColor} stroke="#0f0a1a" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#9333ea",
              border: "none",
              borderRadius: "8px",
              color: "#ec4899",
            }}
          />
          <br />
          <Legend className="mt-36" verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
