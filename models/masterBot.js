module.exports = (sequelize, DataTypes)=>(
    sequelize.define('masterBot', {
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },

        ip:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },

        skin:{
            type:DataTypes.STRING(20),
            allowNull:true,
        }
    },{
        timestamps:true,
        paranoid:true,
    })
);
