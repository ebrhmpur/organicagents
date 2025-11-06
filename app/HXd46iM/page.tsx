"use client";

import { useState, TransitionStartFunction } from "react";
import { createPayment } from "@/library/server-actions/SA_create_invoice";

export default function PayPage() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(10);
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    try {
      setLoading(true);
      const invoice = await createPayment(amount, email);
      const url = invoice?.data?.invoice_url;
      if (url) window.location.href = url;
      else alert("Error: Invoice URL not found.");
    } catch (err) {
      console.error(err);
      alert("there is an error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>plisio payment</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button onClick={handlePay} disabled={loading}>
        {loading ? "creating invoice" : "pay"}
      </button>
    </div>
  );
}
