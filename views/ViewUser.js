
var UserView = Backbone.View.extend({

    tagName: 'tr',

    events: {
        'click .changeage': 'changeage',
        'click .deleteRow':  'deleteRow'
    },

    initialize: function () {
        this.template = _.template($('#viewUser').html());
        this.listenTo(this.model,'change', this.render);
        this.listenTo(this.model,'destroy', this.remove);
    },

    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },

    deleteRow: function() {
        this.model.destroy();
    }
    
});
