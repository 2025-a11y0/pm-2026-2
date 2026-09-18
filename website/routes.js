// website/routes.js
import { Router } from 'express';
import * as api from './apis.js';
import * as controller from './controllers.js';
import { redirectIfAuthenticated, requireAuth } from '../configs/middlewares.js'; 

const router = Router();

router.get('/', controller.home);
router.get('/login', controller.login);
<<<<<<< HEAD
router.get('/register', controller.register);
=======
>>>>>>> 08d45efb2b6a16f8a8af4ae64fe338c6bf6e7d79
router.get('/reset-password', controller.resetPassword);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/players', controller.players);
router.get('/sign-in', controller.signIn);
router.post('/sign-in', redirectIfAuthenticated, controller.login);
router.get('/sign-out', requireAuth, controller.logout);
router.get('/api/v1/sessions', api.sessionInfo);

export default router;