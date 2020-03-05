module.exports = {
    invalidRequest: (response = false, message = 'Invalid request') => {
        if (!response) return;
        response.status(400).json({message});
    },
};
