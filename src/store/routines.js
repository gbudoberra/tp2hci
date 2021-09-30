export default {
    name: "exploreRoutine",
    data: () => ({
        routines: [
            {
                id:1,
                title: 'My routine 1',
                description: 'Esta es mi primer rutina.',
                duration:'01:30',
                difficulty: 'Easy',
                rating: 4,
                color: 'blue',
                pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
                pName: 'Esteban Quito',
                pDes: 'Hola, soy Esteban',
                workoutBlocks: [
                    {id: 1, blockName:'BlockA', sets: 2, exercises: [
                        {
                            id:1,
                            eName: 'Burpees',
                            quantity: 4,
                            units: 'reps'
                        },
                        {
                            id:2,
                            eName: 'Push-ups',
                            quantity: 30,
                            units: 'secs'
                        }
                    ]},
                    {id: 2,blockName:'BlockA', sets: 2, exercises: [
                            {
                                id:1,
                                eName: 'Burpees',
                                quantity: 4,
                                units: 'reps'
                            },
                            {
                                id:2,
                                eName: 'Push-ups',
                                quantity: 30,
                                units: 'secs'
                            }
                        ]},
                    {id: 3,blockName:'BlockA', sets: 2, exercises: [
                            {
                                id:1,
                                eName: 'Burpees',
                                quantity: 4,
                                units: 'reps'
                            },
                            {
                                id:2,
                                eName: 'Push-ups',
                                quantity: 30,
                                units: 'secs'
                            }
                        ]}
                ]
            },
            {
                id:2,
                title: 'My routine 2',
                description: 'Esta es mi segunda rutina.',
                duration:'30:00',
                difficulty: 'Hard',
                rating: 2,
                color: 'green',
                pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
                pName: 'Juan Pedro',
                pDes: 'Hola, soy Juan',
                workoutBlocks: [{id: 1,blockName:'BlockA', sets: 2, exercises: [
                        {
                            id:1,
                            eName: 'Burpees',
                            quantity: 4,
                            units: 'reps'
                        },
                        {
                            id:2,
                            eName: 'Push-ups',
                            quantity: 30,
                            units: 'secs'
                        }
                    ]}]
            },
            {
                id:3,
                title: 'My routine 3',
                description: 'Esta es mi tercera rutina.',
                duration:'09:20',
                difficulty: 'Hard',
                rating: 0,
                color: 'red',
                pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
                pName: 'Pedro Juan',
                pDes: 'Hola, soy Pedro',
                workoutBlocks: [{id: 1,blockName:'BlockA', sets: 2, exercises: [
                        {
                            id:1,
                            eName: 'Burpees',
                            quantity: 4,
                            units: 'reps'
                        },
                        {
                            id:2,
                            eName: 'Push-ups',
                            quantity: 30,
                            units: 'secs'
                        }
                    ]}]
            },
            {
                id:4,
                title: 'My routine 4',
                description: 'Esta es mi cuarta rutina.',
                duration:'17:00',
                difficulty: 'Medium',
                rating: 5,
                color: 'brown',
                pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
                pName: 'Bad Bunny',
                pDes: 'Hola, soy el conejo',
                workoutBlocks: [{id: 1,blockName:'BlockA', sets: 2, exercises: [
                        {
                            id:1,
                            eName: 'Burpees',
                            quantity: 4,
                            units: 'reps'
                        },
                        {
                            id:2,
                            eName: 'Push-ups',
                            quantity: 30,
                            units: 'secs'
                        }
                    ]}]
            },
        ],
        // Esto deberia ser un array general o algo así
        favRoutines: [
            1, 3, 9
        ],
        myRoutines: [

        ]
    }),
    methods:{
        favs(int){
            if(this.favRoutines.includes(int))
                this.favRoutines.splice(this.favRoutines.indexOf(int), 1);
            else this.favRoutines.push(int);
        },
    },
}