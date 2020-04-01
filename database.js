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
                details: ["make sure to get chocolate"],
                tags: ["priority"],
                rain: 50
            },
            randomReminder2: {
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "get swole",
                details: [],
                tags: ["priority", "physical"],
                rain: 20,
            },
            randomReminder3: {
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "fix the toilet",
                details: ["look up how to fix toilet", "see if I have duct tape", "use duct tape and newly acquired knowledge to fix toilet"],
                tags: ["priority", "fix"],
                rain: 0,
            },
            randomReminder4: {
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "have relaxing walk with dog",
                details: ["find dog"],
                tags: ["pet", "fix"],
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
                tags: ["priority"],
                rain: 50
            },
            randomReminder2: {
                datetime: [2020, 4, 1, 13, 30, 0, 0],
                heading: "get shredded",
                details: [],
                tags: ["priority", "physical"],
                rain: 20,
            },
            randomReminder3: {
                datetime: [2020, 4, 3, 9, 30, 0, 0],
                heading: "make yellow snow",
                details: ["buy lemons", "find snow", "use lemons on snow"],
                tags: ["idea"],
                rain: 0,
            },
            randomReminder4: {
                datetime: [2020, 4, 5, 20, 30, 0, 0],
                heading: "find Elsa",
                details: ["do not prompt her to sing"],
                tags: ["social"],
                rain: -1,
            }
        }
    }

};

module.exports = Database;