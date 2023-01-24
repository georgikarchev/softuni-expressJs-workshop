const fs = require('fs/promises');
const path = require('path');
const db = require('../db.json');
const crypto = require('crypto');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static async save(cube) {
        db.cubes.push(cube);
        // make JSON pretty :)
        const json = JSON.stringify(db, null, 2);
        await fs.writeFile(path.resolve(__dirname, '../db.json'), json);
    }
}

module.exports = Cube;