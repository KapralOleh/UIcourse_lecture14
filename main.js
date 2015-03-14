// создаем объект
var app = app || {};

$(function () {

    $.fn.user = function(cmd) {
        if (!window._user) {
            window._user = {};
        }
        if (cmd == 'create') {
            var id = Math.random();
            $(this).attr('data-user-id',id);
            window._user[id] = new UsersView({
                el: this
            });

        } if (cmd == 'json') {
            var id = $(this).attr('data-user-id');
            return window._user[id].coll.toJSON();
        }
    }

    $('#users').user('create');

});
