export function Country({ city }){
    console.log(city.country)
    return(
        <div className="country">
            <h3>{city.countryName}</h3>
        </div>
    )
}