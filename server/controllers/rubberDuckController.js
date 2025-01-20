
import { situations, ducks, users } from '../data/duckData.js';




// Get all ducks
const getAllDucks = (req, res) => {
    res.status(200).json({ ducks });
};

// Get a random duck
const getRandomDuck = (req, res) => {
    const randomIndex = Math.floor(Math.random() * ducks.length);
    res.status(200).json(ducks[randomIndex]);
};

// Get a single duck
const getSingleDuck = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const duck = ducks.find(d => d.id === id);

    if (!duck) {
        return res.status(404).json({ mssg: "Duck not found" });
    }
    res.status(200).json({ duck });
};

// Create a new duck
const createDuck = (req, res) => {
    const { name, color, imageUrl } = req.body;
    const newDuck = {
        id: ducks.length ? ducks[ducks.length - 1].id + 1 : 1,
        name,
        color,
        imageUrl
    };
    ducks.push(newDuck);
    res.status(201).json({ duck: newDuck });
};

// Delete a duck
const deleteDuck = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const duckIndex = ducks.findIndex(d => d.id === id);

    if (duckIndex === -1) {
        return res.status(404).json({ mssg: "Duck not found" });
    }

    const [deletedDuck] = ducks.splice(duckIndex, 1);
    res.status(200).json({ duck: deletedDuck });
};

// Update a duck
const updateDuck = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const duckIndex = ducks.findIndex(d => d.id === id);

    if (duckIndex === -1) {
        return res.status(404).json({ mssg: "Duck not found" });
    }

    const updatedDuck = { ...ducks[duckIndex], ...req.body };
    ducks[duckIndex] = updatedDuck;
    res.status(200).json({ duck: updatedDuck });
};


// Get all ducks
const getAllUsers = (req, res) => {
    res.status(200).json({ users });
};



const authenticateUser = (req, res) => {
    const { username, password } = req.body; // Get data from the request body
    
    // Validate input
    if (!username || !password) {
        return res.status(400).json({ mssg: "Username and password are required" });
    }

    console.log("Input username:", username); // Log the input username from the request
    
    const user = users.find(u => {
        console.log("Checking against database username:", u.name); // Log each username in the database
        return u.name.toLowerCase() === username.toLowerCase(); 
    });

    if (!user) {
        return res.status(404).json({ mssg: "User not found" });
    }

    console.log("User found. Input password:", password, "Database password:", user.password); // Log passwords for comparison

    // Check if the password matches
    if (user.password !== password) {
        return res.status(401).json({ mssg: "Invalid password" });
    }

    console.log("Authentication successful for user:", username); // Log success message

    // Authentication successful
    res.status(200).json({ mssg: "Login successful", user });
};



const getAllSituations = (req, res) => {
    res.status(200).json({ situations });
};

// Get a single situation
const getSingleSituation = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const situation = situations.find(s => s.id === id);

    if (!situation) {
        return res.status(404).json({ message: "Situation not found" });
    }
    res.status(200).json({ situation });
};

export {
    getAllDucks,
    getRandomDuck,
    getSingleDuck,
    createDuck,
    deleteDuck,
    updateDuck,

    getAllSituations,
    getSingleSituation,


    getAllUsers,
    authenticateUser, 
};
