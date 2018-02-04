//  Vue instance

new Vue ({
    el: '#vue-app',
    //  Vue Data
    data: {
        name: 'Rob',
        job: 'Boss',
        website: 'http://www.14-10.com',
        websiteTag: '<a href="http://www.14-10.com">My website</a>',
        age: 28,
        x: 0,
        y: 0
    },
    //  Vue Methods: Can hold functions
    methods: {
        greet: function(time) {
            // this refers to this vue instance
            this.name
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        // The event parameter is automatically passed in from DOM events
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
