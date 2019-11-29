module.exports = (sequelize, DataTypes) => {
  const Atasan = sequelize.define('atasan', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    panggol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eselon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    satker: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jnsjabatan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tgl: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
  });
  return Atasan;
}
