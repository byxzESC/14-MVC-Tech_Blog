const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

let now = new Date();
let formattedNow = now.getMonth() + '-' + now.getDate() + '-' + now.getFullYear();

class Post extends Model { }
// post title, post content, creator, create date
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: formattedNow
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
