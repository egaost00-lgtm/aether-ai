import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY is missing");
}

const ai = new GoogleGenAI({
  apiKey,
});

export async function POST(request: Request) {
  try {
    const lead = await request.json();

    if (!lead) {
      return NextResponse.json(
        { error: "Lead data is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are Aether AI, an AI lead qualification system for a real-estate business.

Analyze this customer enquiry:

Name: ${lead.name || "Not provided"}
Budget: ${lead.budget || "Not provided"}
Location: ${lead.location || "Not provided"}
Property: ${lead.property || "Not provided"}
Buying timeline: ${lead.timeline || "Not provided"}
Requirements: ${lead.requirements || "Not provided"}

Score this lead from 0 to 100.

HOT:
- Strong buying intent
- Clear property requirement
- Suitable/defined budget
- Short or immediate timeline

WARM:
- Genuine interest
- Some information is available
- Budget or timeline is uncertain

COLD:
- Weak or unclear intent
- Very little information
- Long or undefined timeline

Do not invent facts.
Return a short reason based only on the supplied information.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            score: {
              type: "number",
            },
            status: {
              type: "string",
              enum: ["HOT", "WARM", "COLD"],
            },
            reason: {
              type: "string",
            },
          },
          required: ["score", "status", "reason"],
        },
      },
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    const result = JSON.parse(text);

    const score = Math.max(
      0,
      Math.min(100, Math.round(Number(result.score)))
    );

    const status =
      result.status === "HOT" ||
      result.status === "WARM" ||
      result.status === "COLD"
        ? result.status
        : score >= 70
        ? "HOT"
        : score >= 40
        ? "WARM"
        : "COLD";

    return NextResponse.json({
      score,
      status,
      reason: String(result.reason || "AI qualification completed."),
    });
  } catch (error) {
    console.error("Aether AI scoring error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal AI scoring error",
      },
      { status: 500 }
    );
  }
}