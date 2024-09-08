require('dotenv').config();  // Load environment variables from .env file

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {
                    'private-key': process.env.CHAT_ENGINE_PRIVATE_KEY  // Use environment variable
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response?.status || 500).json(e.response?.data || { error: 'Something went wrong' });
    }
});

// Use environment variable for port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
