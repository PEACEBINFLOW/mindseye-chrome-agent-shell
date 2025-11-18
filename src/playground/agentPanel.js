// Displays active agents inside the popup panel

export function renderAgentPanel(el) {
  el.innerHTML = `
    <ul>
      <li>• Browser Event Agent</li>
      <li>• Code Analysis Agent</li>
      <li>• Pattern Monitor Agent</li>
    </ul>
  `;
}
