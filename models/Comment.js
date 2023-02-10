const { Model, DataTypes, bulkCreate } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {
  static bulkCreate(data) {
    return this.bulkCreate(data);
  }
}
// comment content, creator, create date
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
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
    modelName: "comment",
  }
);

module.exports = Comment;
