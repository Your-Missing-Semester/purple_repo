const express = require('express');
const { checkPasswordHandler, resetPasswordHandler } = require('../Handlers/resetPassword');
const changePasswordRouter = express.Router();

changePasswordRouter.post('/check-password', checkPasswordHandler);

changePasswordRouter.put('/', resetPasswordHandler);

module.exports = changePasswordRouter;