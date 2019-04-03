module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: DataTypes.DATE
  });

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { as: 'user', foreign_key: "user_id" });
    Appointment.belongsTo(models.User, { as: 'provider', foreign_key: "provider_id" });
  };

  return Appointment;
};