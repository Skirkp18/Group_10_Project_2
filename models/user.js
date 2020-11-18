const bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
   const User = sequelize.define("User", 
      {
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
               isEmail: true
            }
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false
         },
         firstName: {
            type: DataTypes.STRING,
            allowNull: false
         },
         lastName: {
            type: DataTypes.STRING,
         },
         county: {
            type: DataTypes.STRING,
            allowNull: false
         }
      });
   User.prototype.validPassword = function (password) {
      console.log(password);
      return bcrypt.compareSync(password, this.password);
   };

   User.addHook("beforecreate", (user) => {
      console.log(user.password);
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
   });
   return User;
};
