import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const orders = [
    { id: 1, product: "Shoes", quantity: 2, status: "Pending" },
    { id: 2, product: "Laptop", quantity: 1, status: "Completed" },
    { id: 3, product: "Book", quantity: 4, status: "Pending" },
  ];

  const total = orders.length;
  const pending = orders.filter(o => o.status === "Pending").length;
  const completed = orders.filter(o => o.status === "Completed").length;

  return (
    <div className="container">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Order Management System</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="btn secondary"
            onClick={() => navigate("/analytics")}
          >
            📊 Analytics
          </button>

          <button
            className="btn primary"
            onClick={() => navigate("/add")}
          >
            ➕ Add Order
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="summary">
        <div className="summary-card">
          <p>Total Orders</p>
          <h3>{total}</h3>
        </div>

        <div className="summary-card pending">
          <p>Pending Orders</p>
          <h3>{pending}</h3>
        </div>

        <div className="summary-card completed">
          <p>Completed Orders</p>
          <h3>{completed}</h3>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="card">
        <h3>Orders List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th className="center">Product</th>
              <th className="center">Quantity</th>
              <th className="center">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td className="center">{order.product}</td>
                <td className="center">{order.quantity}</td>
                <td className="center">
                  <span
                    className={`status ${
                      order.status === "Completed"
                        ? "status-completed"
                        : "status-pending"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="empty-text">No orders available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;