const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,     
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    health: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    
    
    
   
  },
  {
    timestamps:false,
  });
};
