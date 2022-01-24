'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo( models.User, {
      as: 'users',
      foreignKey: 'userId'});
    Comment.belongsTo( models.Post, {
      as: 'comments',
      foreignKey: 'postId'});
  };
  return Comment;
};
