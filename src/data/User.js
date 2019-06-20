// Consider: write a competency, apply it to a module
// Consider, do some parameters need "public" switches on them?
const user = {
    id: 1,
    email: `abc@email.com`,
    password: `3k5nim$mdk3`, // encoding format?
    name: {
        first: `Skilly`,
        middle: null,
        last: `Poddy`,
    },
    phone: `123-123-5555`,
    photo: `user1upload.jpg`,
    goal: {learningId: 501, fieldId: 601},
    pathway: [103, 102, 107, 104, 101, 105, 106],
    clickedPlp: false,
    bio: [
        // Thinking multiple possible bio sections
        // Assume custom, but we could have a DB list of some suggested ones. No need to tie back to original suggestion as them changing has no bearing (unless we need stats)
        // Revisit in practice. Could be easier to just have an editable text area that could handle headings, like the portfolios
        {heading: `What I can offer a company is`, content: `Blah blah blah...`}
    ],
    progress: [
        {
            moduleId: 101,
            started: `timestamp`,
            competencies: [
                { 
                    comptencyId: 201,
                    started: `timestamp`,
                    completed: `timestamp`,
                    duration: 2430, // could we just total all of the step + reflection durations? 
                    steps: [
                        { stepsId: 301, started: `timestamp`, completed: `timestamp`, duration: 130 },
                        { stepsId: 302, started: `timestamp`, completed: `timestamp`, duration: 120 },
                        { stepsId: 303, started: `timestamp`, completed: `timestamp`, duration: 154 },
                    ],
                    reflection: {
                        reflectionId: 401,
                        content: `Here's some stuff blah blah blah`,
                        started: `timestamp`,
                        completed: `timestamp`,
                        duration: 2110,
                    }
                },{ 
                    comptencyId: 202, 
                    started: `timestamp`,
                    completed: null,
                    duration: 250,
                    steps: [
                        { stepsId: 306, started: `timestamp`, completed: `timestamp`, duration: 130 },
                        { stepsId: 307, started: `timestamp`, completed: null, duration: 120 },
                    ],
                    reflection: null
                },
            ],
        }
    ],
    history: [
        // Does type need a table?
        // Thinking 'value' as a way to store additional about the action, if necessary
        {type: `login`, date: `timestamp`, value: true},
        {type: `update`, date: `timestamp`, value: [`password`, `phone`]},
        {type: `update`, date: `timestamp`, value: [`goal`]},
    ]
}