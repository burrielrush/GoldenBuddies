const express = require('express');
const { signupUser, loginUser } = require('../../controllers/user');
const requireAuth = require('../../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth)

router.post('/login', loginUser);
router.post('/signup', signupUser);

module.exports = router;
