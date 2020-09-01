;
let myMap;

const init = () => {

    myMap = new ymaps.Map("ya-map", {
        center: [55.76, 37.64],
        zoom: 12,
        controls: [],

    });

    const coords = [
        [55.75, 37.50],
        [55.75, 37.71],
        [55.70, 37.70]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false, // и их можно перемещать
        iconLayout: 'default#image',
        iconImageHref: "./img/pictures/marker.png",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
    
    
    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });
    
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable("scrollZoom");
}

ymaps.ready(init);