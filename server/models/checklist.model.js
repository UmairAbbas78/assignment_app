module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define("Checklist", {
    checklist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Checklist.associate = (models) => {
    Checklist.hasMany(models.Task, {
      onDelete: "cascade",
    });
    Checklist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Checklist;
};
