export default async function (req, res, next) {
    try{
        const { userTasks } = req.userInfo;
        const { taskId } = req.params;
        req.userInfo.isOwner = userTasks.includes(Number(taskId))
        || req.body.userId === req.authorizationData.id
            ? 'OWNER'
            : 'NOT_OWNER';

        next();
    }catch(e){
        next(e)
    }
}