// bm - js for landing page

//SS - retrieve reminder data from database.
const setUpReminders = (data) => {
    data.forEach(doc => {
        const userData = doc.data();
        console.log(userData);

        let email = userData.email;
        console.log(email);

        let reminders = userData.reminders;
        for (let key in reminders) {
            console.log(key);
            let reminder = reminders[key];
            let datetime = reminder.datetime;
            console.log(datetime);
            let details = reminder.details;
            console.log(details);
            let heading = reminder.heading;
            console.log(heading);
            let rain = reminder.rain;
            console.log(rain);
            let tags = reminder.tags;
            console.log(tags);
        }
    })
};
