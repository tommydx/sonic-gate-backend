const router = require('express').Router();

router.use(
  '/users',
  require('./controllers/user-controller')
);

router.use(
  '/users/:user_id/gear',
  require('./controllers/gear-controller')
)

module.exports = router;
