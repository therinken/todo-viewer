
window.onload = App;

// runs when the DOM is loaded
function App() {

    // load some scripts (uses promises :D)
    loader.load({
        url: "./bower_components/jquery/dist/jquery.min.js"
    }, {
        url: "./bower_components/lodash/dist/lodash.min.js"
    }, {
        url: "./bower_components/backbone/backbone.js"
    }, {
        url: "./bower_components/backbone.localStorage/backbone.localStorage.js"
    }, {
        url: "./js/models/todo.js"
    }, {
        url: "./js/collections/todos.js"
    }, {
        url: "./js/views/todos.js"
    }, {
        url: "./js/views/app.js"
    }, {
        url: "./js/routers/router.js"
    }, {
        url: "./js/tapp.js"
    }).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;

        // start app?
        
    });
}

