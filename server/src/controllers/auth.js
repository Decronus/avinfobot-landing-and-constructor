function auth(request, response) {
    const { code } = request.body;
    return response.status(200).send(code === process.env.AUTH_CODE);
}

module.exports = { auth };
