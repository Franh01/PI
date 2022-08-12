const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo  
    sequelize.define('tipo', {
        // id: {
        //     type: DataTypes.UUID,
        //     allowNull: true,
        //     defaultValue: DataTypes.UUIDV4,
        //     unique: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        }
    }, {
        timestamps: false
        });
};
