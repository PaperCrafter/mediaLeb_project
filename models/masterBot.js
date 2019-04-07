module.exports = (sequelize, DataTypes)=>(
    sequelize.define('masterBot', {
        ip:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        func:{
            type:DataTypes.INTEGER(20),
            allowNull:true,
        }
    },{
        timestamps:true,
        paranoid:true,
    })
);
