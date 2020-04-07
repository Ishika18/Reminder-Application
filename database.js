// bm - datetime format = datetime: [year, month, day, hours, minutes, seconds, milliseconds]
// bm - https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

let Database = {
    randomUserIdCindy: {
        username: "cindy",
        email: "cindy@gmail.com",
        password: "cindypassword",
        reminders: {
            randomReminder1: {
                id: 0,
                datetime: [2020, 3, 31, 12, 30, 0, 0],
                heading: "do weekly shop for food",
                details: ["make sure to get chocolate"],
                tags: ["tag-priority", "tag-shop"],
                rain: 50
            },
            randomReminder2: {
                id: 1,
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "get swole",
                details: [],
                tags: ["tag-idea"],
                rain: 20,
            },
            randomReminder3: {
                id: 2,
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "fix the toilet",
                details: ["get tape"],
                tags: ["tag-shop", "tag-fix"],
                rain: 0,
            },
            randomReminder4: {
                id: 3,
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "walk the dog and the kids",
                details: ["find dog"],
                tags: ["tag-pet", "tag-child"],
                rain: -1,
            }
        }
    }, randomUserIdSnowman: {
        username: "snowman",
        email: "snowman@gmail.com",
        password: "snowmanpassword",
        reminders: {
            randomReminder1: {
                datetime: [2020, 3, 31, 12, 30, 0, 0],
                heading: "do weekly shop for carrots",
                details: ["make sure to get snow"],
                tags: ["tag-priority"],
                rain: 50
            },
            randomReminder2: {
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "the moose's birthday",
                details: [],
                tags: ["tag-birthday", "tag-dine"],
                rain: 20,
            },
            randomReminder3: {
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "make yellow snow",
                details: ["buy lemons"],
                tags: ["tag-idea"],
                rain: 0,
            },
            randomReminder4: {
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "clean the holiday home",
                details: ["avoid Elsa's singing"],
                tags: ["tag-clean", "tag-travel"],
                rain: -1,
            }
        }
    }

};

module.exports = Database;