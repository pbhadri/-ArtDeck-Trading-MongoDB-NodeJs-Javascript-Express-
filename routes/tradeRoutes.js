const express = require('express');
const router = express.Router();
const controller = require('../controllers/tradeController');
const { isLoggedIn, isHost } = require('../middlewares/auth');
const { validateId } = require('../middlewares/validator'); 
const { validateTrade, validateResult } = require('../middlewares/validator');

router.get('/', controller.index);
router.get('/new', isLoggedIn, controller.new);
router.post('/', isLoggedIn, validateTrade, validateResult, controller.create);
router.get('/:id', validateId, controller.show);
router.get('/:id/edit', validateId, isLoggedIn, isHost, controller.edit);
router.put('/:id', validateId, isLoggedIn, isHost, validateTrade, validateResult, controller.update);
router.delete('/:id', validateId, isLoggedIn, isHost, controller.delete);
router.post('/profile/edit/:id', isLoggedIn, controller.watch);


module.exports=router;  