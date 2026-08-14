import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// Redireciona para o portfólio vanilla (HTML/CSS/JS puro) servido em /portfolio/
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0a0a0a", color: "#f5f5f5", fontFamily: "system-ui" }}>
      <p>Carregando portfólio…</p>
    </div>
  );
}
