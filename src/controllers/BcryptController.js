const bcrypt = require('bcrypt');

module.exports = {
    async createHash(request, response, next) {
        try {
            const { userText } = request.body;

            const hash = await bcrypt.hash(userText, 10);

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
    }
}