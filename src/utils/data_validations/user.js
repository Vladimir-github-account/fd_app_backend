import Joi from '@hapi/joi';
import { LOGIN_PATTERN, PASSWORD_PATTERN, USER_NAME_PATTERN } from "../../constants";

const nameShema = Joi.string().pattern(USER_NAME_PATTERN);
const loginShema = Joi.string().pattern(LOGIN_PATTERN);
const passwordShema = Joi.string().pattern(PASSWORD_PATTERN);
const emailShema = Joi.string().email();


export default Joi.object({
    firstName: nameShema.label('First Name').when( '$isCreateMode', {
        then: nameShema.label('First Name').required()
    } ),
    lastName: nameShema.label('Last Name').when( '$isCreateMode', {
        then: nameShema.label('Last Name').required()
    } ),
    login: loginShema.label('Login').when( '$isCreateMode', {
        then: loginShema.label('Login').required()
    } ),
    password: passwordShema.label('Password').when( '$isCreateMode', {
        then: passwordShema.label('Password').required()
    } ),
    email: emailShema.label('Email'),
}).min(1).max(5).label('User');