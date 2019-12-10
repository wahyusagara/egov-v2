module.exports = (sequelize, DataTypes) => {
  const Surke = sequelize.define('surke', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lembar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namapegg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    panggol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jab: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tingkat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maksud: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    alat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lama: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tglb: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tglk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instansi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    akun: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keluar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ppk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nipppk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tgl: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    iddata: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ket1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket3: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket4: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket5: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket6: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket7: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket8: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ket9: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ortala: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    niportala: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    golongan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uspd: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  return Surke;
}
