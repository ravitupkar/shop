const { check, body, sanitizeBody } = require('express-validator');

module.exports.adminRegistervalidation = [
    body('name').trim().isLength({ min: 3 }).withMessage('must be at least 5 chars long'),
    body('mobile').trim().isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
    body('username').trim().isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    body('email').isEmail().trim().normalizeEmail().withMessage('plese enter correct email'),
    body('password').trim().isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    sanitizeBody('notifyOnReply').toBoolean()
];

module.exports.adminloginvalidation = [
    body('email').isEmail().trim().normalizeEmail().withMessage('plese enter correct email'),
    body('password').trim().isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    sanitizeBody('notifyOnReply').toBoolean()
];

module.exports.adminprofilevalidation = [
    body('email').isEmail().trim().normalizeEmail().withMessage('plese enter correct email'),
    body('password').trim().isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    sanitizeBody('notifyOnReply').toBoolean()
];

module.exports.admincategoryvalidation = [
    body('categoryName').trim().isLength({ min: 5 }).normalizeEmail().withMessage('must be at least 5 chars long'),
    body('categorySlug').trim().isLength({ min: 5 }).normalizeEmail().withMessage('must be at least 5 chars long'),
    sanitizeBody('notifyOnReply').toBoolean()
];
