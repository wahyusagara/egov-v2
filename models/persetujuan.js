module.exports = (sequelize, DataTypes) => {
  const Persetujuan = sequelize.define('persetujuan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    iddata: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    instansi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tgl: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tglu: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    a: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    b: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    c: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  return Persetujuan;
}
