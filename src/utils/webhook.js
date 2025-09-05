const axios = require('axios');

async function sendWebhook(event, payload) {
    const WEBHOOK_URL = process.env.WEBHOOK_URL || "http://localhost:5000/webhook";
    try {
        await axios.post(WEBHOOK_URL, {event, payload});
    }catch (err){
        console.error("Webhook failed:", err.message);
    }
}