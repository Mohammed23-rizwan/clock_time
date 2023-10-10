function timing (){
    let get_hours = new Date().getHours();
    let get_minutes = new Date().getMinutes();
    let get_seconds = new Date().getSeconds();

    
    const hours = document.querySelector('#hours')
    hours.innerHTML = get_hours<10?"0"+get_hours:get_hours
    const minutes =document.querySelector('#minutes')
    minutes.innerHTML = get_minutes<10?"0"+get_minutes:get_minutes
    const seconds = document.querySelector('#seconds')
    seconds.innerHTML = get_seconds<10?"0"+get_seconds:get_seconds
}

setInterval(timing,1000)
