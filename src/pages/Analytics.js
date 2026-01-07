import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useNavigate } from "react-router-dom";

const COLORS = ["#f39c12", "#27ae60"];

function Analytics() {
  const navigate = useNavigate();

  // TEMP data (later you can connect backend)
  const orders = [
    { status: "Pending", count: 4 },
    { status: "Completed", count: 6 },
  ];

  const totalOrders = orders.reduce((a, b) => a + b.count, 0);

  return (
    <div className="container">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Order Analytics</h2>
        <button className="btn secondary" onClick={() => navigate("/")}>
          ← Back to Dashboard
        </button>
      </div>

      {/* SUMMARY */}
      <div className="summary">
        <div className="summary-card">
          <p>Total Orders</p>
          <h3>{totalOrders}</h3>
        </div>
        <div className="summary-card pending">
          <p>Pending</p>
          <h3>{orders[0].count}</h3>
        </div>
        <div className="summary-card completed">
          <p>Completed</p>
          <h3>{orders[1].count}</h3>
        </div>
      </div>

      {/* CHARTS */}
      <div className="analytics-grid">
        {/* PIE */}
        <div className="card">
          <h3>Status Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={orders}
                dataKey="count"
                nameKey="status"
                outerRadius={90}
                label
              >
                {orders.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR */}
        <div className="card">
          <h3>Orders Overview</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={orders}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3498db" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;