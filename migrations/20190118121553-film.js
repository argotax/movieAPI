'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('film',
            {
                "id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "titre": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "année": {
                    "type": "YEAR(4)",
                    "allowNull": false
                },
                "poster": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "synopsis": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "category": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "references": {
                        "model": "categories",
                        "key": "id"
                    }
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                }
            })
        })

        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('film');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};