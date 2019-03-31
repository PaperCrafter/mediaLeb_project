module.exports = (sequelize, DataTypes)=>{
    sequelize.define('user', {
        id:{
            type:DataTypes.INT(32),
            allowNull:false,
            //autoIncrement:true,
        },
        ip:{
            type:DataTypes
        },
        func:{
            type:DataTypes
        }
    })
}