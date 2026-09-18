
import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #071a35 50%, #0b2a52 100%)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #2563eb, #38bdf8)",
            marginBottom: "24px",
            fontWeight: 800,
            fontSize: "24px",
          }}
        >
          SP
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: 800,
            margin: "0 0 16px",
            letterSpacing: "-0.04em",
          }}
        >
          Smart Point
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 32px",
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Votre bibliothèque professionnelle de templates PowerPoint.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 18px",
            borderRadius: "999px",
            background: "rgba(37, 99, 235, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            color: "#7dd3fc",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />

          Application Smart Point opérationnelle
        </div>
      </main>
    </div>
  );
}

