// Client to communicate with MindsEye Core & Search Engine

const MINDS_EYE_CORE_URL = "http://localhost:5001/events";

export const MindsEyeClient = {
  async sendEvent(evt) {
    try {
      await fetch(MINDS_EYE_CORE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evt)
      });
    } catch (err) {
      console.error("MindsEyeClient error:", err);
    }
  }
};
