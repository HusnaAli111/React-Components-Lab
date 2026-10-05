import './WeatherForecast.css'
function Weather({day,img,time,conditions,imgAlt}){

    return(
        <>
        <div className="weather">
  <h2>Day of the Week {day}</h2>
  <img src="{img}" alt={imgAlt} />
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>

        </>
    )
}


// to export
export default Weather