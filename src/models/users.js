import Sequelize from 'sequelize';


const sequelize = new Sequelize('test', 'postgres', '301090', {
  host: 'localhost',
  dialect: 'postgres'
});

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.STRING
  }
},{
  sequelize,
});
sequelize.sync({alter: true})

export { User }
export default User;