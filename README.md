# 🖥️ DevOps Infrastructure Monitor & Automated Health-Check

## 🧑‍🎓 Student Profile
* **Developer Name:** Amber
* **Degree Program:** Master of Information Technology (MIT)
* **Curricular Context:** Capstone Integration Milestone (CS619)

## 📌 Project Overview
The Local Infrastructure Automation & Network Diagnostics Engine is a single-file, lightweight Node.js utility engineered to automate hardware telemetry and verify live outbound computer network connections.

### Why this project exists:
* **Infrastructure Metrics:** Samples local workstation RAM metrics without heavy tools.
* **Network Reliability Analytics:** Measures network latency and HTTP states down to millisecond accuracy.
* **Academic Rigor:** Built as a comprehensive hands-on implementation of Core Operating System concepts.

## 🧰 Tech Stack & Workspace Architecture
* **Runtime Environment:** Node.js (Core Runtime Layer)
* **Languages:** JavaScript (ES6+ Asynchronous Execution)
* **Native System Modules:** `os` (Hardware Interface), `fs` (File System Operations)

## 🚀 Key Features & Architectural Capabilities
* **Unified Telemetry Stream:** Samples Memory, Connection Status, and Route Latency in an atomic thread loop.
* **Defensive Connection Gates:** Enforces an absolute 10,000ms circuit-break limit via AbortSignal parameters.
* **Granular Network Exception Traps:** Dissects low-level socket protocol exceptions (ENOTFOUND) from standard web returns.

## 🛠️ Installation & Setup Instruction Guide
```bash
node monitor.js
```

## 🔬 Regression Testing Logs
```text
Processing unified systems health inspection...
--- SYSTEM INSPECTION COMPLETE ---
[2026-10-25T21:20:00.000Z] RAM Total: 15.64GB | RAM Free: 4.82GB | Network: SUCCESS (200) | Latency: 142ms
```
