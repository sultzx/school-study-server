import { body } from 'express-validator'

export const registration = [
    body('email').isEmail(),
    body('lastname').isString(),
    body('firstname').isString(),
    body('patronymic').isString(),
    body('phone').isString(),
    body('address').isString(),
    body('password').isString(),
]

export const login = [
    body('email').optional().isEmail(),
    body('phone').optional().isString(),
    body('password').isString()
]

export const updateProfile = [
    body('lastname').isString(),
    body('firstname').isString(),
    body('patronymic').isString(),
    body('birthday').isString(),
    body('phone').isString(),
    body('address').isString(),
    body('class').isString(),
    body('abcd').isString(),
    body('father_lname').isString(),
    body('father_fname').isString(),
    body('father_patron').isString(),
    body('father_phone').isString(),
    body('mother_lname').isString(),
    body('mother_fname').isString(),
    body('mother_patron').isString(),
    body('mother_phone').isString(),
    body('avatar').isString(),
]

export const exam = [
    body('title').isString(),
    body('img').optional().isString(),
]