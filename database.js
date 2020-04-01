// bm - datetime format = datetime: [year, month, day, hours, minutes, seconds, milliseconds]
// bm - https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

let Database = {
    randomUserIdCindy: {
        username: "cindy",
        email: "cindy@gmail.com",
        password: "cindypassword",
        reminders: {
            randomReminder1: {
                datetime: [2020, 3, 31, 12, 30, 0, 0],
                heading: "do weekly shop for food",
                details0: "make sure to get chocolate",
                rain: 50,
                tag0: "priority",
                tag2: "shop",
            },
            randomReminder2: {
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "get swole",
                rain: 20,
                tag0: "priority",
                tag2: "physical",
            },
            randomReminder3: {
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "fix the toilet",
                details0: "look up how to fix toilet",
                details1: "see if I have duct tape",
                details3: "use duct tape and newly acquired knowledge to fix toilet",
                rain: 0,
                tag0: "priority",
                tag1: "fix",
            },
            randomReminder4: {
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "have relaxing walk with dog",
                details0: "find dog",
                rain: 0,
                tag0: "pet",
                tag1: "fix",
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
                details0: "make sure to get snow",
                rain: 50,
                tag0: "priority",
                tag2: "shop",
            },
            randomReminder2: {
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "get shredded for summer",
                rain: 20,
                tag0: "priority",
                tag2: "physical",
            },
            randomReminder3: {
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "create yellow snow",
                details0: "acquire a water bottle",
                details1: "drink lots of water",
                details3: "find surplus snow",
                rain: 0,
                tag0: "idea",
            },
            randomReminder4: {
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "find Elsa",
                details0: "do not prompt her to sing",
                rain: 0,
                tag0: "social",
            }
        }
    }

};

module.exports = Database;