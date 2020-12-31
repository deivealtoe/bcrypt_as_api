const bcrypt = require('bcrypt');
const knex = require('../database/index');

module.exports = {
    async createHash(request, response, next) {
        try {
            const { userText } = request.body;

            const hash = await bcrypt.hash(userText, 10);

            await knex('bcrypt_hashes').insert({
                text: userText,
                hash
            });

            return response.status(200).json({ hash });
        } catch (error) {
            next(error);
        }
    },
    async compareHash(request, response, next) {
        try {
            const { userText, userHash } = request.body;

            const itMatches = await bcrypt.compare(userText, userHash);

            return response.status(200).json({ itMatches });
        } catch (error) {
            next(error);
        }
    },
    async getAllHashesSaved(request, response, next) {
        try {
            const results = await knex('bcrypt_hashes');

            return response.status(200).json(results);
        } catch (error) {
            next(error);
        }
    }
}