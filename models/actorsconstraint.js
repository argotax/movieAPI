/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actorsconstraint', {
    actorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'actors',
        key: 'id'
      }
    },
    filmId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'film',
        key: 'id'
      }
    }
  }, {
    tableName: 'actorsconstraint'
  });
};
