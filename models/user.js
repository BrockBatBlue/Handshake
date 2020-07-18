module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email:DataTypes.STRING
      //password:DataTypes.STRING
    });
  
    User.associate = function(models) {
      User.hasMany(models.Service, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  