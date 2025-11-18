# Browser → MindEyeEvent Mapping

Every browser event is transformed:

```json
{
  "type": "dom_click",
  "title": "User clicked element",
  "url": "https://example.com",
  "timestamp": "...",
  "blockId": "daily_2025-11-18",
  "segmentId": "2025-11-18T09",
  "channel": "realtime",
  "priority": "normal",
  "reliability": "must_deliver",
  "source": "chrome"
}
