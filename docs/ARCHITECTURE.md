# MindsEye Chrome Agent Shell Architecture

The extension turns Chrome into a MindsEye OS node:

1. Capture browser events.
2. Normalize them into `MindEyeEvent`.
3. Apply LAW-T (time labeling).
4. Apply LAW-N (network intent).
5. Send to MindsEye Core.
6. Expose UI to interact with agents + binary playground.
