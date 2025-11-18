import { renderAgentPanel } from "../src/playground/agentPanel.js";
import { analyzeCode } from "../src/playground/codePanel.js";

document.addEventListener("DOMContentLoaded", () => {
  renderAgentPanel(document.getElementById("agentPanel"));

  document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const code = document.getElementById("codeInput").value;
    const out = await analyzeCode(code);
    document.getElementById("codeOutput").textContent = JSON.stringify(out, null, 2);
  });
});
