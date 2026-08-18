"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Payment = {
  id: string;
  client_id: string;
  project_id: string | null;
  invoice_number: string | null;
  description: string | null;
  amount: number;
  status: string;
  due_date: string | null;
};

export default function PaymentsSection() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPayments() {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in.");
        setLoading(false);
        return;
      }

      const { data: client, error: clientError } =
        await supabase
          .from("clients")
          .select("id")
          .eq("user_id", user.id)
          .single();

      if (clientError || !client) {
        console.error("Client lookup error:", clientError);
        setError("Client account could not be found.");
        setLoading(false);
        return;
      }

      const { data, error: paymentError } =
        await supabase
          .from("payments")
          .select("*")
          .eq("client_id", client.id)
          .order("due_date", { ascending: false });

      if (paymentError) {
        console.error(
          "Payments loading error:",
          paymentError
        );

        setError(paymentError.message);
        setLoading(false);
        return;
      }

      setPayments(data || []);
    } catch (err) {
      console.error("Payments unexpected error:", err);
      setError("Unable to load payments.");
    }

    setLoading(false);
  }

  useEffect(() => {
    loadPayments();
  }, []);

  const pendingAmount = payments
    .filter(
      (payment) =>
        payment.status?.toLowerCase() === "pending"
    )
    .reduce(
      (total, payment) =>
        total + Number(payment.amount || 0),
      0
    );

  function formatAmount(amount: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function formatDate(date: string | null) {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function isPaid(status: string) {
    return status?.toLowerCase() === "paid";
  }

  return (
    <div>
      {/* Header */}

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Payments
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            View your invoices, payment status and upcoming
            payment deadlines.
          </p>
        </div>

        <button
          type="button"
          onClick={loadPayments}
          className="w-fit rounded-xl border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:bg-white/[0.04] hover:text-white"
        >
          Refresh
        </button>
      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.08] bg-[#090e16] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
            <CreditCard size={19} />
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Pending Payments
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {formatAmount(pendingAmount)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#090e16] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
            <FileText size={19} />
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Total Invoices
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {payments.length}
          </p>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Payments */}

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090e16] shadow-2xl">
        <div className="border-b border-white/[0.08] px-6 py-5">
          <h2 className="font-semibold text-white">
            Payment History
          </h2>

          <p className="mt-1 text-xs text-gray-600">
            Your invoices and payment records
          </p>
        </div>

        {loading && (
          <div className="flex min-h-[250px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

              <p className="mt-4 text-sm text-gray-500">
                Loading payments...
              </p>
            </div>
          </div>
        )}

        {!loading && payments.length === 0 && (
          <div className="flex min-h-[280px] items-center justify-center px-6">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <CreditCard size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                No payments yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Your invoices and payment records will
                appear here.
              </p>
            </div>
          </div>
        )}

        {!loading && payments.length > 0 && (
          <div className="divide-y divide-white/[0.06]">
            {payments.map((payment) => {
              const paid = isPaid(payment.status);

              return (
                <div
                  key={payment.id}
                  className="flex flex-col gap-5 px-6 py-6 transition hover:bg-white/[0.02] md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-400">
                      <FileText size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {payment.description ||
                          "Payment"}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {payment.invoice_number ||
                          "Invoice"}
                      </p>

                      <p className="mt-2 text-xs text-gray-500">
                        Due:{" "}
                        {formatDate(
                          payment.due_date
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-6 md:justify-end">
                    <div className="text-right">
                      <p className="text-lg font-bold text-white">
                        {formatAmount(
                          Number(payment.amount)
                        )}
                      </p>

                      <div className="mt-1 flex items-center justify-end gap-1.5">
                        {paid ? (
                          <CheckCircle2
                            size={13}
                            className="text-green-400"
                          />
                        ) : (
                          <Clock3
                            size={13}
                            className="text-yellow-400"
                          />
                        )}

                        <span
                          className={`text-xs font-medium ${
                            paid
                              ? "text-green-400"
                              : "text-yellow-400"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}