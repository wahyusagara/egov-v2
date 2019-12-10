module.exports = (sequelize, DataTypes) => {
  const Persetujuan_detil = sequelize.define('persetujuan_detil', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    iddata: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instansi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tgl: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tglu: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    a: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  return Persetujuan_detil;
}
