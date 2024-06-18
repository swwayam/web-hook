const express = require('express');
const app = express();
const port = 3000;

// Store webhook subscriptions
const subscriptions = {};

// Middleware for JSON parsing
app.use(express.json());

// API 1: Create a webhook subscription
app.post('/subscribe/:event', (req, res) => {
    const event = req.params.event;
    const url = req.body.url;
    if (!subscriptions[event]) subscriptions[event] = [];
    subscriptions[event].push(url);
    res.json({ message: `Subscribed to event ${event}` });
});

// API 2: Trigger an event
app.post('/trigger/:event', (req, res) => {
    const event = req.params.event;
    const payload = req.body;

    if (!subscriptions[event]) {
        return res.status(404).json({ error: 'No subscriptions for this event' });
    }

    // Simulate sending webhooks (you'd use an actual HTTP client here)
    subscriptions[event].forEach(url => {
        console.log(`Sending webhook to ${url} for event ${event}:`, payload);
    });

    res.json({ message: `Event ${event} triggered` });
});

// API 3: List subscriptions for an event
app.get('/subscriptions/:event', (req, res) => {
    const event = req.params.event;
    res.json({ subscriptions: subscriptions[event] || [] });
});

app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
