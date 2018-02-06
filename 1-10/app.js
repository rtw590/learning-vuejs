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
        ageBinding: '',
        nameBinding: '',
        ageExample2: 28,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false
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
        },
        addExample2: function(inc) {
            this.ageExample2 += inc;
        },
        subtractExample2: function(dec) {
            this.ageExample2 -= dec;
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('you entered your name')
        },
        logAge: function() {
            console.log('you entered your age')
        }
    },
    // Different than methods. Lookup documentation to understand better
    computed: {
        addToA: function() {
            return this.a + this.age
        },
        addToB: function() {
            return this.b + this.age
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
