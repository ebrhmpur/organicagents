"use server";

interface PlisioInvoiceResponse {
  status: string;
  data?: {
    invoice_url?: string;
    invoice_id?: string;
    currency?: string;
    amount?: string;
  };
  message?: string;
}

export async function createPayment(
  amount: number,
  email: string
): Promise<PlisioInvoiceResponse> {
  const apiKey = process.env.PLISIO_API_KEY;
  if (!apiKey) {
    throw new Error("PLISIO_API_KEY not found in environment variables.");
  }

  const params = new URLSearchParams({
    api_key: apiKey,
    order_name: "Digital Product",
    order_number: Date.now().toString(),
    currency: "USDT",
    source_currency: "USD",
    source_amount: amount.toString(),
    email,
    callback_url: "https://organicagents.vercel.app/api/plisio/callback",
    success_url: "https://organicagents.vercel.app/payment/success",
    cancel_url: "https://organicagents.vercel.app/cancel",
    underpayment_allowed: "1",
  });

  const response = await fetch(
    `https://plisio.net/api/v1/invoices/new?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Plisio API error: ${response.status}`);
  }

  const data: PlisioInvoiceResponse = await response.json();

  if (data.status !== "success") {
    console.error("Plisio Error Response:", data);
    throw new Error(data.message || "Failed to create invoice");
  }

  return data;
}
