;
let myMap;

const init = () => {

    myMap = new ymaps.Map("ya-map", {
        center: [55.754086, 37.623591],
        zoom: 13,
        controls: [],

    });

    const coords = [
        [55.758636, 37.601619],
        [55.757862, 37.619643],
        [55.754764, 37.631488]
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