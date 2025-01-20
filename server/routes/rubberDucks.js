import express from 'express';
import {
    getAllDucks,
    getSingleDuck,
    deleteDuck,
    updateDuck,
    getRandomDuck,

    getAllSituations,
    getSingleSituation,

    authenticateUser,
} from '../controllers/rubberDuckController.js';

const router = express.Router();

/**
 * Read Only Permission Routes
 */
// GET all ducks
router.get('/', getAllDucks)

// GET a random duck
router.get('/random', getRandomDuck);

// GET a single duck
router.get('/:id', getSingleDuck)

/**
 * Read and Write Permission Routes
 */
// POST a new duck
//router.post('/', createDuck)

// DELETE a duck
router.delete('/:id', deleteDuck)

// UPDATE a duck
router.patch('/:id', updateDuck)


// VERIFY user
router.post('/', authenticateUser); // Add authentication route


router.get('/chat/situations', getAllSituations); 

// Get a single situation
router.get('/chat/situations/:id', getSingleSituation); 



export default router;