'use strict';

const publication = (sequelize, DataTypes) => {
  const Publication = sequelize.define('Publication', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });

  return Publication;
};

module.exports = publication;