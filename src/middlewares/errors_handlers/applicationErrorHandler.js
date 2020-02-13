import ApplicationError from "../../utils/application_errors/ApplicationError";

export default function (err, req, res, next){
    if (err instanceof ApplicationError) {
        return res.status(err.status).send( err.message )
    }
    return next( err );
}