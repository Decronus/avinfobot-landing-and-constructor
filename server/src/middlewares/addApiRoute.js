const addApiRoute = (request, response, next) => {
    request.url = `/api${request.url}`;
    next();
};

module.exports = addApiRoute;
