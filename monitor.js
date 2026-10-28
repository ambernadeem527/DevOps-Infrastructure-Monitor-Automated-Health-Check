const os = require('os');
const fs = require('fs');

// ----- Settings (change them here, nowhere else) -----
const TARGET_URL = 'https://github.com';
const LOG_FILE = 'system_logs.txt';
const TIMEOUT_MS = 10000;
const BYTES_PER_GB = 1024 * 1024 * 1024;

// ----- Helper: bytes to gigabytes -----
function toGB(bytes) {
    return (bytes / BYTES_PER_GB).toFixed(2);
}

// ----- Computer Network check -----
async function checkNetwork() {
    const startTime = Date.now();
    let state;

    try {
        const response = await fetch(TARGET_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
        state = response.ok ? `SUCCESS (${response.status})` : `HTTP ERROR (${response.status})`;
    } catch (err) {
        const reason = err.cause && err.cause.code ? err.cause.code : err.message;
        state = `OFFLINE (${reason})`;
    }

    return { state, latencyMs: Date.now() - startTime };
}

// ----- Main program -----
async function runUnifiedMonitorSystem() {
    console.log('Processing unified systems health inspection...');

    const totalGB = toGB(os.totalmem());
    const freeGB = toGB(os.freemem());
    const network = await checkNetwork();

    const logLine = `[${new Date().toISOString()}] RAM Total: ${totalGB}GB | RAM Free: ${freeGB}GB | Network: ${network.state} | Latency: ${network.latencyMs}ms\n`;

    try {
        fs.appendFileSync(LOG_FILE, logLine);
        console.log('\n--- SYSTEM INSPECTION COMPLETE ---');
        console.log(logLine.trim());
    } catch (err) {
        console.error(`Could not write to ${LOG_FILE}: ${err.message}`);
    }
}

runUnifiedMonitorSystem();
