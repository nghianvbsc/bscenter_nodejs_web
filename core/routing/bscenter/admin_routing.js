module.exports = function (app, express, io, baseDir) {

    app.get('/login.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/basic_table.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/blank.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/buttons.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/calendar.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/chartjs.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/form_component.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/general.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/admin_index.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/morris.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/panels.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/responsive_table.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    app.get('/todo_list.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });
};