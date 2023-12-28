
export function Temperature({ weather }) {
    return (
        <div className="temperature">
            <h2>{weather[0].temperature}<sup>°</sup>C</h2>
        </div>
    )
}