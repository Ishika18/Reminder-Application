// bm - js for landing page

//SS - retrive reminder data from database.
const setUpReminders = (data) => {
    data.forEach(doc => {
        const userData = doc.data();
        console.log(userData);

        let userName = userData.username;
        console.log(userName);

        let email = userData.email;
        console.log(email);

        let reminders = userData.reminders;
        for (let i = 0; i < reminders.length; i++) {
            let reminder = reminders[i];
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