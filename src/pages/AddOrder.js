import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddOrder() {
  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Pending");

  const saveOrder = () => {
    if (!product || !quantity) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      product,
      quantity,
      status,
    });

    navigate("/");
  };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Add New Order</h2>

        <button className="btn secondary" onClick={() => navigate("/")}>
          ← Back to Dashboard
        </button>
      </div>

      {/* FORM */}
      <div className="form-card">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="e.g. Wireless Mouse"
          value={product}
          onChange={e => setProduct(e.target.value)}
        />

        <label>Quantity</label>
        <input
          type="number"
          placeholder="e.g. 3"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />

        <label>Status</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="form-actions">
          <button className="btn primary" onClick={saveOrder}>
            Save Order
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;