

document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function() {
        this.classList.add('active');
        document.querySelector('.header__nav').classList.toggle('open');

    })

    let map;
    let currentMarker;

    function initMap() {
        map = L.map('map-container').setView([50.45, 30.52], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Добавьте этот код в функцию initMap()
        map.invalidateSize();
    }

    const locationIP = {
        "opera": {
            lat: 50.44804100700142,
            lon: 30.499886717809325
        },
        "hilton": {
            lat: 50.4452205086455,
            lon: 30.50478665275341
        },
        "riviera": {
            lat: 50.45907603094283,
            lon: 30.524370615484287
        },
        "intercontinental": {
            lat: 50.45573522185971,
            lon: 30.519588688740715
        },
        "cityHoliday": {
            lat: 50.460531281274086,
            lon: 30.5254576564617
        },
        "premier": {
            lat: 50.44244915359543,
            lon: 30.51739708479521
        },
        "fairmont": {
            lat: 50.45334825771477,
            lon: 30.51834673926258
        },
        "hyatt": {
            lat: 50.46038024544453,
            lon: 30.519902096309136
        }
    };

    document.querySelectorAll('.list__hotel-btn').forEach(button => {
        button.addEventListener('click', function () {
            const hotelName = this.getAttribute('data-value');
            const hotelLocation = locationIP[hotelName];

            if (hotelLocation) {
                // Удаление предыдущего маркера
                if (currentMarker) {
                    map.removeLayer(currentMarker);
                }

                // Обновление карты с новыми координатами
                map.setView(new L.LatLng(hotelLocation.lat, hotelLocation.lon), 15);

                // Добавление маркера на карту
                currentMarker = L.marker([hotelLocation.lat, hotelLocation.lon]).addTo(map);

                // Отображение попапа с картой
                document.getElementById('popup').style.display = 'block';
                document.getElementById('overlay').style.display = 'block';

                // Обновление размера карты
                map.invalidateSize();
            }
        });
    });

    document.getElementById('overlay').addEventListener('click', ()=> {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });

    initMap();
});





