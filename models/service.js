module.exports = function(sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      contactInfo:DataTypes.STRING,
      phoneNumber:DataTypes.STRING,
      zipCode: DataTypes.STRING
    });
  
    Service.associate = function(models) {
      Service.hasMany(models.Reviews, {
        onDelete: "cascade"
      });
  
      Service.belongsTo(models.Categories, {
        foreignKey: {
          allowNull: false
        }
      });
  
      Service.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      
    };
  
    return Service;
  };
  