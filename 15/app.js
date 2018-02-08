Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}</p>',
    data: function() {
        return {
            name: 'Rob'
        }
    }
});

new Vue ({
    el: '#vue-app-one'
});

new Vue ({
    el: '#vue-app-two'
});
