const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api/user-routes');

router.use('/api/user-routes', apiRoutes);

module.exports = router;
