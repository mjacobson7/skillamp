const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

module.exports = (app) => {
  app.put('/updateUser', authController.verifyValidToken, userController.updateUser);

  app.get('/getCurrentUser', authController.verifyValidToken, userController.getCurrentUser);

  app.get('/getAllUsers', authController.verifyValidToken, userController.getAllUsers);

  app.get('/getMyTeam', authController.verifyValidToken, userController.getMyTeam);

  app.get('/getSupervisorDropdown', authController.verifyValidToken, userController.getSupervisorDropdown);

  app.get('/getRolesDropdown', authController.verifyValidToken, userController.getRolesDropdown);
};
