module.exports = (sequelizer, DataTypes)=>{
    return sequelizer.define('slaveBot',{
        port:{
            type:DataTypes.INTEGER(20),
            allowNull:false,
            unique:true,
        },

        skin:{
            type:DataTypes.STRING(20),
            allowNull:true,
        }
    },{
        timestamps:false,
    });
}