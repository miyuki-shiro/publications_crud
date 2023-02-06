#!/bin/bash

echo "Running migrations and seeders"
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all

echo "Starting server"
npm start