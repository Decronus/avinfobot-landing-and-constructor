const loggerUrl = (request, _response, next) => {
    console.log(request.url);
    next();
};

module.exports = loggerUrl;
