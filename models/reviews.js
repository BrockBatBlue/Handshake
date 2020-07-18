module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    rating:DataTypes.INTEGER
  });

  Reviews.associate = function(models) {  
      Reviews.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Reviews.belongsTo(models.Service, {
          foreignKey: {
            allowNull: false
          }
        });
  };

  return Reviews;
};
