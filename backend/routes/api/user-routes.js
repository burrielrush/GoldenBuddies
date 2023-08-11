const express = require('express');
const { signupUser, loginUser } = require('../../controllers/user');
const requireAuth = require('../../middleware/requireAuth');

const router = express.Router();

// router.use(requireAuth)

router.route('/login').post(loginUser);
router.route('/signup').post(signupUser);

module.exports = router;
