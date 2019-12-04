module.exports = (sequelize, DataTypes) => {
  const Atasan_surtug = sequelize.define('atasan_surtug', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_surtug: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eselon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    has_approval: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  });
  return Atasan_surtug;
}
