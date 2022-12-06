const router = require('express').Router();

const userApiRoutes = require('./api/user-routes.js');
const homeRoutes = require('./home-routes.js');
const postApiRoutes = require('./api/post-routes.js');


router.use('/', homeRoutes);
router.use('/api/users', userApiRoutes);
router.use('/api/posts', postApiRoutes)

module.exports = router;