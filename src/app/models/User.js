import Sequelize, { Model } from 'sequelize';


class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.BOOLEAN,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

}
 
}

export default User;