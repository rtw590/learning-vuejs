//  Vue instance

new Vue ({
    el: '#vue-app',
    //  Vue Data
    data: {
      health: 100,
      ended: false
    },
    //  Vue Methods: Can hold functions
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },
    // Different than methods. Lookup documentation to understand better
    computed: {
       
    }
});
