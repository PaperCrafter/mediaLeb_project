module.exports=(sequelizer, DataTypes)=>{
    return sequelizer.define('skin',{
        skin:{
            type:DataTypes.STRING(20),
            unique:true,
            allowNull:false,
        },
        func1:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        func2:{
            type:DataTypes.STRING(20),
            allowNull:true,
        },
        func3:{
            type:DataTypes.STRING(20),
            allowNull:true,
        }
    },{
        timestamps:false,
    });
}