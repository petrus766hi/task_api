import Sequelize from 'sequelize';

const sequelize = new Sequelize('test', 'postgres', '301090', {
    host: 'localhost',
    dialect: 'postgres'
  });

const Model = Sequelize.Model;
class Product extends Model {}
Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  product: {
    type: Sequelize.STRING
  },
  stock: {
    type: Sequelize.INTEGER
  }
},{
  sequelize,
});
sequelize.sync({alter: true})

export { Product }
export default Product;