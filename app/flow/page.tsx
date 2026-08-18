"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  budget: string | null;
  location: string | null;
  property_type: string | null;
  timeline: string | null;
  requirements: string | null;
  created_at: string;
  ai_score: number | null;
ai_status: string | null;
ai_reason: string | null;
};

export default function FlowPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

useEffect(() => {
  fetchLeads();
}, []);

  async function fetchLeads() {
    setLoading(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Lead fetch error:", error);
      setError(error.message);
      setLoading(false);
      return;
    }

    const loadedLeads = data || [];

setLeads(loadedLeads);
setSelectedLead(loadedLeads[0] || null);
setLoading(false);

// Automatically analyze leads that don't have an AI score yet
for (const lead of loadedLeads) {
  if (lead.ai_score === null) {
    analyzeLead(lead);
  }
}
  }
  async function analyzeLead(lead: Lead) {
  try {
    const response = await fetch("/api/ai-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: lead.name,
        budget: lead.budget,
        location: lead.location,
        property: lead.property_type,
        timeline: lead.timeline,
        requirements: lead.requirements,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("AI scoring failed:", data.error);
      return;
    }

    const { error: updateError } = await supabase
      .from("leads")
      .update({
        ai_score: data.score,
        ai_status: data.status,
        ai_reason: data.reason,
      })
      .eq("id", lead.id);

    if (updateError) {
      console.error("AI result save error:", updateError);
      return;
    }

    const updatedLead: Lead = {
      ...lead,
      ai_score: data.score,
      ai_status: data.status,
      ai_reason: data.reason,
    };

    setLeads((current) =>
      current.map((item) =>
        item.id === lead.id ? updatedLead : item
      )
    );

    setSelectedLead((current) =>
      current?.id === lead.id ? updatedLead : current
    );

    console.log(
      `AETHER AI: ${lead.name} → ${data.score}/100 → ${data.status}`
    );
  } catch (error) {
    console.error("Automatic AI analysis error:", error);
  }
}

  const totalLeads = leads.length;

  /*
   * We haven't connected the AI scoring engine yet.
   * For now, these remain 0 rather than showing fake numbers.
   */
  const hotLeads = leads.filter(
  (lead) => lead.ai_status === "HOT"
).length;

const warmLeads = leads.filter(
  (lead) => lead.ai_status === "WARM"
).length;

const conversionRate =
  totalLeads > 0
    ? Math.round((hotLeads / totalLeads) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              AETHER <span className="text-cyan-400">FLOW</span>
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              AI-powered business automation
            </p>
          </div>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            AI Engine Online
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Real Estate Automation
          </p>

          <h2 className="text-4xl font-bold">
            Business Overview
          </h2>

          <p className="mt-2 text-gray-400">
            Turn incoming leads into qualified opportunities with AI.
          </p>
        </div>

        {/* Stats */}
        <section className="grid gap-5 md:grid-cols-4">
          <StatCard
            title="Total Leads"
            value={loading ? "..." : String(totalLeads)}
          />

          <StatCard
            title="🔥 Hot Leads"
            value={loading ? "..." : String(hotLeads)}
          />

          <StatCard
            title="🟡 Warm Leads"
            value={loading ? "..." : String(warmLeads)}
          />

          <StatCard
            title="Conversion Rate"
            value={loading ? "..." : `${conversionRate}%`}
          />
        </section>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
            Failed to load leads: {error}
          </div>
        )}

        {/* Main content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Leads */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  Recent Leads
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Real enquiries from your business
                </p>
              </div>

              <button
                onClick={fetchLeads}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
              >
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="rounded-xl border border-white/10 bg-black/20 p-8 text-center text-gray-500">
                Loading real leads...
              </div>
            ) : leads.length === 0 ? (
              <div className="rounded-xl border border-white/10 bg-black/20 p-8 text-center">
                <p className="text-gray-300">
                  No leads yet.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  New property enquiries will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {leads.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      selectedLead?.id === lead.id
                        ? "border-cyan-400/40 bg-cyan-400/[0.06]"
                        : "border-white/10 bg-black/20 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-medium">
                          {lead.name}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                          {lead.property_type || "Property"}{" "}
                          •{" "}
                          {lead.location || "Location not specified"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-medium">
                          {lead.budget || "Budget not specified"}
                        </p>

                        <span
  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
    lead.ai_status === "HOT"
      ? "bg-red-400/10 text-red-400"
      : lead.ai_status === "WARM"
      ? "bg-yellow-400/10 text-yellow-400"
      : lead.ai_status === "COLD"
      ? "bg-gray-400/10 text-gray-400"
      : "bg-cyan-400/10 text-cyan-400"
  }`}
>
  {lead.ai_status || "NEW"}
</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AI Analysis */}
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-6">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              AI Lead Analysis
            </p>

            {selectedLead ? (
              <>
                <h3 className="mt-3 text-2xl font-bold">
                  {selectedLead.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <Info
                    label="Budget"
                    value={selectedLead.budget || "Not specified"}
                  />

                  <Info
                    label="Location"
                    value={selectedLead.location || "Not specified"}
                  />

                  <Info
                    label="Property"
                    value={selectedLead.property_type || "Not specified"}
                  />

                  <Info
                    label="Timeline"
                    value={selectedLead.timeline || "Not specified"}
                  />

                  <Info
                    label="Email"
                    value={selectedLead.email}
                  />

                  <Info
                    label="Phone"
                    value={selectedLead.phone}
                  />
                </div>

              {selectedLead.ai_score !== null ? (
  <div className="mt-6 rounded-xl border border-cyan-400/20 bg-black/30 p-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm uppercase tracking-wider text-cyan-400">
          AI Score
        </p>

        <p className="mt-2 text-4xl font-bold">
          {selectedLead.ai_score}
          <span className="text-lg text-gray-500">/100</span>
        </p>
      </div>

      <div
        className={`rounded-full px-4 py-2 text-sm font-bold ${
          selectedLead.ai_status === "HOT"
            ? "bg-red-400/10 text-red-400"
            : selectedLead.ai_status === "WARM"
            ? "bg-yellow-400/10 text-yellow-400"
            : "bg-gray-400/10 text-gray-400"
        }`}
      >
        {selectedLead.ai_status}
      </div>
    </div>

    <div className="mt-5 border-t border-white/10 pt-4">
      <p className="text-sm font-medium">
        Why AI scored this lead
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {selectedLead.ai_reason}
      </p>
    </div>
  </div>
) : (
    
  
 <div className="mt-6 space-y-4">

  {/* AI Result */}
  {selectedLead.ai_score !== null ? (
    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            AI Score
          </p>

          <p className="mt-1 text-3xl font-bold text-cyan-400">
            {selectedLead.ai_score}/100
          </p>
        </div>

        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-400">
          {selectedLead.ai_status}
        </span>
      </div>

      {selectedLead.ai_reason && (
        <p className="mt-4 text-sm leading-6 text-gray-400">
          {selectedLead.ai_reason}
        </p>
      )}
    </div>
  ) : (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-medium">
        AI qualification
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        AI scoring will analyze this lead's budget,
        property requirement, location, timeline and
        enquiry details.
      </p>
    </div>
  )}

</div>
)}

               <button
               disabled={analyzing}
  onClick={async () => {
  try {setAnalyzing(true);
    const response = await fetch("/api/ai-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
  name: selectedLead.name,
  budget: selectedLead.budget,
  location: selectedLead.location,
  property: selectedLead.property_type,
  timeline: selectedLead.timeline,
  requirements: selectedLead.requirements,
}),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "AI analysis failed");
      return;
    }

    // Save AI result to Supabase
    const { error: updateError } = await supabase
      .from("leads")
      .update({
        ai_score: data.score,
        ai_status: data.status,
        ai_reason: data.reason,
      })
      .eq("id", selectedLead.id);

    if (updateError) {
      console.error("AI result save error:", updateError);
      alert("AI analysis worked, but the result could not be saved.");
      return;
    }

    // Update the lead locally
    const updatedLead = {
      ...selectedLead,
      ai_score: data.score,
      ai_status: data.status,
      ai_reason: data.reason,
    };

    setSelectedLead(updatedLead);

    setLeads((currentLeads) =>
      currentLeads.map((lead) =>
        lead.id === selectedLead.id ? updatedLead : lead
      )
    );

    alert(
      `AI Score: ${data.score}/100\nStatus: ${data.status}\n\n${data.reason}`
    );
  } catch (error) {
    setAnalyzing(false);console.error("AI analysis error:", error);
    setAnalyzing(false);alert("Unable to connect to Aether AI");
  }
}}
  className="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-black transition hover:bg-cyan-300"
>
  {analyzing ? "Analyzing with AI..." : "Start AI Analysis"}
</button>
              </>
            ) : (
              <div className="mt-8 text-sm text-gray-500">
                Select a lead to view its details.
              </div>
            )}
          </div>
        </section>

        {/* AI insights */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">
            AI Insights
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Insight
              title="High-value leads"
              value="—"
              description="AI analysis coming next"
            />

            <Insight
              title="Uncontacted leads"
              value="—"
              description="Will be tracked automatically"
            />

            <Insight
              title="Hot lead conversion"
              value="—"
              description="Calculated after AI scoring"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="max-w-[65%] break-all text-right text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

function Insight({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-cyan-400">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
}