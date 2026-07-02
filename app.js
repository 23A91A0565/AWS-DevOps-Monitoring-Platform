const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 DevOps Assignment Application is Running Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        uptime: process.uptime(),
        timestamp: new Date()
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        project: "DevOps Technical Assignment",
        server: "AWS EC2",
        environment: "Production"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
