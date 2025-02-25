// bm - core script for doing things browser side

// rl Geolocation
async function getRainData(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(await setLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// rl post location to /darkSky
async function setLocation(location) {
    const options = {
        method: 'post',
        body: JSON.stringify({
            lat: location.coords.latitude,
            long: location.coords.longitude,
        }),
        mode: "cors",  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    await fetch('/darkSky', options);
    document.location.reload()

    // rl TODO "".then necessary? I dont think i will be returning res values here. is there something more appropriate than fetch?""
}