var UserModel = Backbone.Model.extend({
    defaults: {
        name : "name",
        age : "age",
        description : "desc"
    },
    initialize: function() {},
    validate: function (attrs) {
        if (!((attrs.age) > 0)) {
            console.log('Incorrect age');
            return 'Incorrect age';
        }
    }
});

var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    sortParam: 'age',
    sortMode: 1,
    comparator: function(a,b) {
        if (a.get(this.sortParam) > b.get(this.sortParam)) return -1*this.sortMode;
        if (a.get(this.sortParam) < b.get(this.sortParam)) return this.sortMode;
        return 0;
    }
});


