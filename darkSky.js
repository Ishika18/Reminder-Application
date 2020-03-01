const fetch = require('node-fetch');
let darksky = 'https://api.darksky.net/forecast/';
let key = '55a1b0aafc740393ca2506b2ab5311dc';
let lat = 49.2298125; // van
let long = -123.17074910000001; // van
//let time = 1582992000 // feb 29 2020 4pm
let uri = darksky + key + '/' + lat +','+ long; // + "," + time;
uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');
    
let options = {
    method: 'GET',
    mode: 'cors'
}
let req = new fetch.Request(uri, options);

function getRainProbabilities(){
    let rainChance = []
    fetch(req)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Bad HTTP!')
            }
        })
        .then((j) =>{
            for (let i = 0; i < 8; i++){
                rainChance[i] =j.daily.data[i].precipProbability
            }
            console.log(j.daily.data)//.precipProbability);
            console.log(rainChance)
            return rainChance
            //console.log('JSON data provided');
        })
        .catch( (err) =>{
            console.log('ERROR:', err.message);
        });
    
}
console.log("hello")
console.log(getRainProbabilities())
