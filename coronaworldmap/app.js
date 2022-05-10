function update (){
    fetch('/data.json')
    .then(response => response.json())
    .then(rsp => {
        var maxpatients =0;
        rsp.data.forEach(element => {
        if(element.infected>maxpatients)
        {
            maxpatients=element.infected;
        }
    })
        rsp.data.forEach(element => {
            let latitude=element.latitude;
            let longitude=element.longitude;
            let infected=element.infected;
            let colo=((infected/maxpatients)*255);
            color= `rbg(${colo}, 0, 0)`;
            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
        });
    })
}
let interval=200000;
setInterval(update,interval);