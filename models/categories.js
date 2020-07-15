module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
      category: DataTypes.STRING
    });

    Categories.associate = function(models) {  
        Categories.belongsTo(models.Service, {
          foreignKey: {
            allowNull: false
          }
        });
    };
  
    return Categories;
  };
  