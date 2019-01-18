/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('film', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    année: {
      type: "YEAR(4)",
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    synopsis: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'film'
  });
};
