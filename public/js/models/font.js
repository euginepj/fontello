var fm = (function (fm) {
    var App = fm.App,
        cfg = fm.cfg,
        env = fm.env,
        debug = fm.debug;

    App.Models.Font = Backbone.Model.extend({
        defaults: function () {
            return {
                fontname:   "unknown",
                is_loaded:  false,
                is_ok:      false,
                is_added:   false
            };
        },

        // FIXME: the model isn't sync()ed to server yet
        sync: function () {
            console.log("Models.Font.sync()");
        }
    });

    return fm;
})(fm || {});
