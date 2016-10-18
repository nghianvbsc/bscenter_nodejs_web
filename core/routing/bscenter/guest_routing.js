module.exports = function (app, express, io, baseDir) {

    app.get('/', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/index.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/sign-up.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/about-us.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/contact-us.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/services.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });
};