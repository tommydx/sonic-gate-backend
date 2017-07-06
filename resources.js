const router = require('express').Router();

router.use(
  '/users',
  require('./controllers/users')
);

router.use(
  '/users/:user_id/locations',
  require('./controllers/locations')
)

module.exports = router;
