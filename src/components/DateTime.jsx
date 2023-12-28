
export function DateTime({ weather }) {
    return (
        <div className="dateTime">
            <p>{weather[0].time}</p>
        </div>
    )
}