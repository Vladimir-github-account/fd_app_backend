import AppError from '../../utils/application_errors';

export default async function (req, res, next) {
    const {authorization : authorizationValue} = req.headers;
    if (authorizationValue === undefined){
        next(new AppError.UnauthorizedError());
    }
    if (authorizationValue === ''){
        next(new AppError.EmptyValueError());
    }
    const actorId = Number(authorizationValue);
    if (!Number.isInteger(actorId)) {
        next(new AppError.NonIntegerUnauthorizedError());
    } else if (actorId < 1) {
        next(new AppError.NonPositiveNumberUnauthorizedError());
    }
    req.authorizationData = {
        id: actorId,
    };
    next();
}