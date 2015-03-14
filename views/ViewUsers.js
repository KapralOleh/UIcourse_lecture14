var UsersView = Backbone.View.extend({

    events: {
        "click .addObject": "addObject",
        "click .toJSON": "toJSON",
        "click [data-sort]": "renderList"
    },

    initialize: function() {
        this.template = _.template($('#viewUsers').html());
        this.$el.html(this.template());
        this.coll = new UsersCollection();
        this.listenTo(this.coll, "all", this.render);
        this.listenTo(this.coll, "add", this.addOne);
    },

    render: function() {
        var age = 0;
        this.coll.each(function(obj,index){
            age += obj.get('age');
        });
        this.$('.users-count').text(this.coll.length);
        this.$('.users-age').text(age);
    },

    addObject: function() {
        this.coll.add({
           name : $('#name').val(),
            age : $('#age').val(),
            description: $('#descr').val()
        });
    },

    addOne: function(model) {
        var view = new UserView({model: model});
        this.$('.usersList').append(view.render());
    },

    renderList: function (e) {
        this.$('.usersList').html('');
        this.coll.sortParam = $(e.target).attr('data-sort');
        this.coll.sortMode = this.coll.sortMode*(-1);
        this.coll.sort();
        var that = this;
        this.coll.each(function(model,index){
            that.addOne(model);
        });
    },

    toJSON: function() {
        var json = this.coll.toJSON();
        this.$('.json-out').html(JSON.stringify(json));
    }

});




