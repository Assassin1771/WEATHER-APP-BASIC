function fun1() {
    var city = document.getElementById('search-input').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9aa78a808a34a56396a9b7120d845d5a')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            var loc = data['name'];
            document.getElementById('location').innerHTML = loc;

            var temp = data['main']['temp'] - 273;
            var x = Math.round(temp);
            document.getElementById('temp-maxx').innerHTML = x;

            var climate = data['weather'][0]['main'];
            document.getElementById('climate').innerHTML = climate;

            if (climate == 'Thunderstorm') {
                document.getElementById('temp-icon').src = './icons/thunderstorm.png';
            } else if (climate == 'Clear') {
                document.getElementById('temp-icon').src = './icons/clear.png';
            } else if (climate == 'Drizzle') {
                document.getElementById('temp-icon').src = './icons/drizzle.png';
            } else if (climate == 'Rain') {
                document.getElementById('temp-icon').src = './icons/rain.png';
            } else if (climate == 'Snow') {
                document.getElementById('temp-icon').src = './icons/snow.png';
            } else {
                document.getElementById('temp-icon').src = './icons/remains.png';
            }

        })
        .catch(err => alert('Wrong City Name'))
}