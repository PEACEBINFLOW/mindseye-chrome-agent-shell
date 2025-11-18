# MindsEye Chrome Agent Shell

> Chrome as agent shell + playground for the MindsEye OS.

`mindseye-chrome-agent-shell` is a Chrome extension that turns the browser into a **MindsEye node**:

- Captures browser events and normalizes them as `MindEyeEvent` objects (LAW-T / LAW-N aware).
- Acts as a **playground** for pattern + code experiments using the Moving Library and Binary Engine.
- Provides a UI surface where **agents can “live”**: observe, act, and reflect over what happens in the browser.

---

## Core Ideas

- **Agent Shell**  
  Chrome becomes the local “skin” of MindsEye:
  - tab changes, URL visits, and user actions are captured as events
  - events are time-labeled (LAW-T) and network-labeled (LAW-N)
  - forwarded to MindsEye Core, Search Engine, Ledger, etc.

- **Binary & Code Playground**  
  The extension exposes a small panel where you can:
  - paste code / select snippets from pages
  - send them to the `mindseye-binary-engine` and Moving Library
  - inspect pattern IDs, entropy, or suggested code variants

- **OS Integration**  
  This repo is Part 3 of the MindsEye OS series. It connects to:
  - `minds-eye-core` (event model + LAW-T)
  - `minds-eye-law-n-network` (network metadata)
  - `mindseye-binary-engine` (binary cognition)
  - `mindseye-moving-library` (code ⇆ binary ⇆ code)
  - `mindseye-google-ledger` / analytics / devlog

---

## Repository Structure (planned)

```txt
mindseye-chrome-agent-shell/
  extension/
    manifest.json          # Chrome extension manifest (v3)
    background.js          # event capture + LAW-T/Law-N labeling + API calls
    content-script.js      # in-page hooks (DOM, selection, context menu)
    popup.html             # main UI shell
    popup.js               # UI logic for agents + playground
  src/
    mindseyeClient.js      # HTTP/WebSocket client for MindsEye Core & Search
    lawtAdapter.js         # maps browser events → MindEyeEvent shape
    lawnAdapter.js         # adds network metadata (channel, priority, etc.)
    playground/
      codePanel.js         # code/binary playground panel
      agentPanel.js        # shows active agents, logs, status
  docs/
    ARCHITECTURE.md        # high-level design of the shell
    EVENT_MODEL.md         # how browser events become MindEyeEvents
    PLAYGROUND.md          # UX for code/binary experiments
