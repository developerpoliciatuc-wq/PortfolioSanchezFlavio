import { Router } from 'express';
import { contactFormHandler } from '../controllers/contactController.js';
import { validateRequest } from '../middleware/validation.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { contactSchema } from '../schemas/contact.schema.js';

const router = Router();

router.post('/', contactLimiter, validateRequest(contactSchema), contactFormHandler);

export default router;
