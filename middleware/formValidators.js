const { check } = require("express-validator");
const db = require('../db/models')

const signUpValidators = [
  check('userName')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a value for username.')
  .isLength({ max: 50 })
  .withMessage('Please provide a username of 50 characters or less.')
  .custom(value => {
    return db.User.findOne({ userName: value })
    .then(user => {
      if(user) {
        return Promise.reject('Username already in use.');
      }
    });
  }),
  check('firstName')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a first name.')
  .isLength({ max: 50 })
  .withMessage('Please provide a first name of 50 characters or less.'),
  check('lastName')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a last name.')
  .isLength({ max: 50 })
  .withMessage('Please provide a last name of 50 characters or less.'),
  check('email')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a valid email.')
  .isEmail()
  .isLength({ max: 255 })
  .withMessage('Please provide an email of 255 characters or less.'),
  check('password')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a valid password.'),
  check('confirmPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please retype your password.')
  .custom((confirmed, {req}) => {
    if(confirmed !== req.body.password){
      throw new Error('Passwords do not match.')
    }
    return true;
  })
  .withMessage('Please make sure passwords match.')
];

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .notEmpty()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please enter a valid password.')
];

const postValidators = [
  check('title')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a title for your post.')
    .isLength({ max: 255 })
    .withMessage('Please provide a title of 255 characters or less.'),
  check('content')
    .exists({ checkFalsy: true})
    .withMessage('Please provide content for your post.')
]



  module.exports = {signUpValidators, loginValidators, postValidators}
