module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  Task.associate = (models) => {
    Task.belongsTo(models.Checklist, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Task;
};
