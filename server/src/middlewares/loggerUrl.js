const loggerUrl = (request, response, next) => {
    console.log(request.url);
    next();
};

module.exports = loggerUrl;
