                    Readme  Capstone Integration Milestone
🧑‍🎓 Student Profile
·	Developer Name: Amber
·	Degree Program: Master of Information Technology (MIT)
·	Curricular Context: Capstone Integration Milestone (Subjects 10, 11, 14, 15 / CS619)
📌 Project Overview
The Local Infrastructure Automation & Network Diagnostics Engine is a single-file, lightweight Node.js utility engineered to automate hardware telemetry and verify live outbound computer network connections. Developed over an intensive 10-day sprint, the application bridges systems engineering with software project management by querying low-level operating system APIs, enforcing defensive async boundaries, and aggregating structured health reports chronologically into persistent flat-file storage.
Why this project exists:
·	Infrastructure Metrics: Eliminates reliance on heavy third-party monitoring setups to sample local workstation RAM metrics.
·	Network Reliability Analytics: Measures network latency and HTTP state parameters down to millisecond accuracy while resolving unhandled runtime network exception cascades.
·	Academic Rigor: Built as a comprehensive hands-on implementation of Core Operating System concepts, Computer Network protocols, and Agile Software Project Management methods.
🧰 Tech Stack & Workspace Architecture
·	Runtime Environment: Node.js (Core Runtime Layer)
·	Languages: JavaScript (ES6+ Asynchronous Execution)
·	Native System Modules: os (Hardware Interface), fs (File System Operations)
·	IDE & Console: Visual Studio Code & Windows Command Prompt (cmd)
·	Agile Management Workspace: Notion Kanban Project Board Configuration
📅 The 10-Day Journey Roadmap
🚀 Key Features & Architectural Capabilities
·	Unified Telemetry Stream: Samples Total Memory, Free Memory, Connection Status, and Route Latency within a singular atomic thread loop.
·	Defensive Connection Gates: Enforces an absolute 10,000ms circuit-break limit via AbortSignal parameters to isolate execution sequences from dangling connection cascades.
·	Granular Network Exception Traps: Dissects low-level socket protocol exceptions (ENOTFOUND) away from standard web application code returns (404, 500) to guarantee error-reporting integrity.
·	Non-Destructive Sequential Logging: Leverages local disk appends ensuring historical datasets append safely to system_logs.txt without causing file corruption or resource collision.
🛠️ Installation & Setup Instruction Guide
1. Prerequisites
Ensure your local host workstation has the active Node.js runtime environment installed (v18+ recommended). Check version variables via:
bash
node --version
npm --version
Use code with caution.
2. Repository Deployment
Clone or download this source configuration code locally onto your machine, navigate to the targeted project directory, and initialize the system requirements:
bash
# Navigate to the workspace path
cd local-infrastructure-monitor

# Install dependencies (if any are introduced in future extensions)
npm install
Use code with caution.
3. Execution Procedures
Execute the primary core monitoring script via the standard terminal command prompt:
bash
node monitor.js
Use code with caution.
📄 Telemetry Data Dictionary Schema
Logs written down to system_logs.txt use a standardized, single-line format for easy parsing:
🔬 Regression Testing Logs
Expected Terminal Diagnostic Stream:
text
Processing unified systems health inspection...

--- SYSTEM INSPECTION COMPLETE ---
[2026-10-25T21:20:00.000Z] RAM Total: 15.64GB | RAM Free: 4.82GB | Network: SUCCESS (200) | Latency: 142ms
```

### Handled Environmental States:
* **Normal Connection Route:** Identifies online targets accurately, outputting `SUCCESS (200)`.
* **DNS Interface Interruption:** Intercepts unresolvable public routes cleanly, tracking state output as `OFFLINE (ENOTFOUND)`.
* **Physical Hardware Air-Gap:** Isolates complete physical networking loss gracefully, logging state traces as `OFFLINE (EAI_AGAIN)`.

---

## 🔮 Future Enhancements Roadmap
* **Interval Polling Loop:** Incorporate native `setInterval` bindings to turn the manual run command into a live background automation daemon.
* **Alert Trigger thresholds:** Implement custom boundary flags to trigger flashing dashboard warnings when available RAM dips beneath critical percentages or packet drop latencies spike.
* **JSON Telemetry Overhaul:** Migrate flat-line log records into well-structured JSON arrays to facilitate downstream analysis on dashboard charting utilities.

<FollowUp>
Would you like me to add **GitHub style Badges** for your Tech Stack section, or help you generate the **`.gitignore` file configurations** to prevent uploading your `system_logs.txt` file to your public repository?
</FollowUp>

