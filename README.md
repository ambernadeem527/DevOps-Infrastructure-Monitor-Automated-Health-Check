# Readme — Capstone Integration Milestone

## 🧑‍🎓 Student Profile

- **Developer Name:** Amber
- **Degree Program:** Master of Information Technology (MIT)
- **Curricular Context:** Capstone Integration Milestone (Subjects 10, 11, 14, 15 / CS619)

---

## 📌 Project Overview

The **Local Infrastructure Automation & Network Diagnostics Engine** is a single-file, lightweight Node.js utility engineered to automate hardware telemetry and verify live outbound computer network connections.

Developed over an intensive 10-day sprint, the application bridges systems engineering with software project management by querying low-level operating system APIs, enforcing defensive async boundaries, and aggregating structured health reports chronologically into persistent flat-file storage.

### Why This Project Exists

- **Infrastructure Metrics:** Eliminates reliance on heavy third-party monitoring setups to sample local workstation RAM metrics.
- **Network Reliability Analytics:** Measures network latency and HTTP state parameters down to millisecond accuracy while resolving unhandled runtime network exception cascades.
- **Academic Rigor:** Provides hands-on implementation of core operating system concepts, computer network protocols, and Agile software project management methods.

---

## 🧰 Tech Stack & Workspace Architecture

- **Runtime Environment:** Node.js (Core Runtime Layer)
- **Languages:** JavaScript (ES6+ Asynchronous Execution)
- **Native System Modules:** `os` (Hardware Interface), `fs` (File System Operations)
- **IDE & Console:** Visual Studio Code and Windows Command Prompt (`cmd`)
- **Agile Management Workspace:** Notion Kanban Project Board Configuration

---

## 📅 The 10-Day Journey Roadmap

*Add the milestones completed during each day of the 10-day development sprint here.*

---

## 🚀 Key Features & Architectural Capabilities

- **Unified Telemetry Stream:** Samples total memory, free memory, connection status, and route latency within a singular atomic thread loop.
- **Defensive Connection Gates:** Enforces a 10,000 ms circuit-break limit via `AbortSignal` parameters to isolate execution sequences from dangling connection cascades.
- **Granular Network Exception Traps:** Distinguishes low-level socket protocol exceptions (such as `ENOTFOUND`) from standard web application status codes (such as `404` and `500`) to improve error-reporting integrity.
- **Non-Destructive Sequential Logging:** Uses local disk appends to preserve historical datasets in `system_logs.txt` without overwriting existing records.

---

## 🛠️ Installation & Setup Instructions

### 1. Prerequisites

Ensure that Node.js is installed on your workstation. Node.js v18 or later is recommended.

Check your installed versions using the following commands:

```bash
node --version
npm --version
```

### 2. Repository Deployment

Clone or download the project source code and navigate to the project directory.

```bash
# Navigate to the workspace directory
cd local-infrastructure-monitor

# Install dependencies, if required
npm install
```

### 3. Execution Procedures

Run the primary monitoring script from the project directory:

```bash
node monitor.js
```

---

## 📄 Telemetry Data Dictionary Schema

The application writes telemetry records to `system_logs.txt` using a standardized, single-line format for easier parsing.

The example below illustrates the fields recorded in a diagnostic log:

| Field | Description | Example |
|---|---|---|
| Timestamp | Date and time of the diagnostic record in ISO 8601 format | `2026-10-25T21:20:00.000Z` |
| RAM Total | Total system memory | `15.64GB` |
| RAM Free | Available system memory | `4.82GB` |
| Network | Connection result or HTTP status | `SUCCESS (200)` |
| Latency | Measured network response time | `142ms` |

---

## 🔬 Regression Testing Logs

### Expected Terminal Diagnostic Stream

```text
Processing unified systems health inspection...

--- SYSTEM INSPECTION COMPLETE ---
[2026-10-25T21:20:00.000Z] RAM Total: 15.64GB | RAM Free: 4.82GB | Network: SUCCESS (200) | Latency: 142ms
```

### Handled Environmental States

- **Normal Connection Route:** Identifies online targets and reports `SUCCESS (200)`.
- **DNS Interface Interruption:** Handles unresolvable public routes and records `OFFLINE (ENOTFOUND)`.
- **Physical Hardware Air-Gap:** Handles complete physical networking loss and records `OFFLINE (EAI_AGAIN)`.

---

## 🔮 Future Enhancements Roadmap

- **Interval Polling Loop:** Incorporate native `setInterval` bindings to turn the manual run command into a live background automation process.
- **Alert Trigger Thresholds:** Implement custom thresholds to trigger dashboard warnings when available RAM falls below critical percentages or network latency increases significantly.
- **JSON Telemetry Overhaul:** Migrate flat-file log records into structured JSON arrays to support downstream analysis and dashboard charting.
