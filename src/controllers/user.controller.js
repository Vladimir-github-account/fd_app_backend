const { User } =  require('../db/models');

module.exports = async function getUserByPk (req, res, next) {
  try{
    const { id } = req.params.userId;
    const foundedUser = await User.findByPk(id, {
      attributes: {
        exclude: ['password']
      }
    });
    if (foundedUser){
      return res.send(foundedUser);
    }
  }catch (e) {
    next( e );
  }
};

