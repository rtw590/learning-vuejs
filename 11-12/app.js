//  Vue instance

new Vue ({
    el: '#vue-app',
    //  Vue Data
    data: {
       error: false,
       success: false,
       pokemon: ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'],
       ffx: [
           {
               name: 'Lulu', 
               age: 33
            },
            {
                name: 'Tidus', 
                age: 18
            },
            {
                name: 'Auron', 
                age: 88
            }
        ]
    },
    //  Vue Methods: Can hold functions
    methods: {
    },
    // Different than methods. Lookup documentation to understand better
    computed: {
       
    }
});
