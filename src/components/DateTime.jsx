
export function DateTime({ forecast }) {
    return (
        <div className="dateTime">
            <p>{forecast[0].date}</p>
        </div>
    )
}