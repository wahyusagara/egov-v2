module.exports = (sequelize, DataTypes) => {
  const Surke = sequelize.define('surke', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lembar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    namapegg: {
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
    jab: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tingkat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maksud: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tj: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lama: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tglb: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tglk: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instansi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    akun: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    keluar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ppk: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nipppk: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tgl: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    iddata: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ket1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket4: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket5: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket6: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket7: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket8: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ket9: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ortala: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    niportala: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    golongan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uspd: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  return Surke;
}
