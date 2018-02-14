##### Setting Up Postgres

1. Login to postgres `psql postgres`
2. Issue Command `CREATE ROLE five_talent_brian WITH LOGIN PASSWORD 'hire_me';`
3. Issue Command `CREATE DATABASE fiver;`

##### Clone Package

1. `git clone https://github.com/mcshiz/five-talent.git`

##### NPM install

1. `npm install`

##### Run Project

1. `npm dev run`


##### Troubleshooting
If no listings are showing by default 
1. `../node_modules/.bin/sequelize db:seed:all`