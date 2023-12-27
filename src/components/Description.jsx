
export function Description({ forecast }) {
    return (
        <div className="description">
            <p>{forecast[0].weather}</p>
        </div>
    )
}