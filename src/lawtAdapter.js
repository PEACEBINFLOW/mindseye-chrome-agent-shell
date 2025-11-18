// LAW-T → Adds blockId + segmentId to events

export function applyLAW_T(evt) {
  const t = new Date(evt.timestamp);

  const blockId = `daily_${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
  const segmentId = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}T${t.getHours()}`;

  return {
    ...evt,
    blockId,
    segmentId
  };
}
