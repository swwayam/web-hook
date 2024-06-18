// TODO: Import the express module

// TODO: Create an instance of an Express application

// TODO: Define the port number the server will listen on
const port = 1337; // DO NOT CHANGE

// TODO: Create an object to store webhook subscriptions

// TODO: Use JSON middleware to parse JSON request bodies

// TODO: Define an API endpoint to create a webhook subscription
app.post("/subscribe/:event", (req, res) => {
  // TODO: Extract the event name from the URL parameters
  // TODO: Extract the URL from the request body
  // TODO: If there are no subscriptions for the event, initialize an empty array
  // TODO: Add the URL to the list of subscriptions for the event
  // TODO: Send a JSON response confirming the subscription
});

// TODO: Define an API endpoint to trigger an event
app.post("/trigger/:event", (req, res) => {
  // TODO: Extract the event name from the URL parameters
  // TODO: Extract the payload from the request body
  // TODO: Check if there are any subscriptions for the event If no subscriptions, send a 404 response with an error message
  // TODO: Simulate sending webhooks by logging each subscription URL and the payload
  // TODO: Send a JSON response confirming the event was triggered
});

// TODO: Define an API endpoint to list subscriptions for a specific event
app.get("/subscriptions/:event", (req, res) => {
  // TODO: Extract the event name from the URL parameters
  // TODO: Send a JSON response with the list of subscriptions for the event (or an empty array if none exist)
});

// TODO: Start the server and have it listen on the specified port
app.listen(port, () => {
  // Log a message to the console once the server is running
  console.log(`Webhook server listening at http://localhost:${port}`);
});
