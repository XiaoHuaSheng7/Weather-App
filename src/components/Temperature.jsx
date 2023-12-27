
export function Temperature({ forecast }) {
    return (
        <div className="temperature">
            <h2>{forecast[0].temperature}<sup>°</sup>C</h2>
        </div>
    )
}