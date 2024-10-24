document.getElementById("checkButton").addEventListener("click", checkIssPosition);

async function checkIssPosition() {
    // Obter latitude e longitude inseridas pelo usuário
    const MY_LAT = parseFloat(document.getElementById("latitude").value);
    const MY_LONG = parseFloat(document.getElementById("longitude").value);
    
    try {
        // Buscar posição ISS
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        const data = await response.json();
        
        const issLatitude = parseFloat(data.iss_position.latitude);
        const issLongitude = parseFloat(data.iss_position.longitude);
        
        let statusMessage = `A ISS está atualmente na Latitude: ${issLatitude}, Longitude: ${issLongitude}.`;

        // Verifique se o ISS está próximo da localização do usuário
        if (MY_LAT - 5 <= issLatitude && issLatitude <= MY_LAT + 5 &&
            MY_LONG - 5 <= issLongitude && issLongitude <= MY_LONG + 5) {
            statusMessage += "<br>Olhe para cima! A ISS está sobre sua localização!";
        } else {
            statusMessage += "<br>A ISS não está sobre sua localização no momento.";
        }

        document.getElementById("issStatus").innerHTML = statusMessage;
        
    } catch (error) {
        console.log("Erro ao buscar a posição da ISS:", error);
        document.getElementById("issStatus").innerHTML = "Erro ao buscar a posição da ISS.";
    }
}
