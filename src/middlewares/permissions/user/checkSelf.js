export default async function (req, res, next) {
    try{
        const { id: actorId } = req.authorizationData;
        const { userId } = req.params;
        req.userInfo.isSelf = actorId === Number(userId)
            ? 'SELF'
            : 'OTHER';
        next();
    }catch(e){
        next(e)
    }
}