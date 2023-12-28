
export function Description({ weather }) {
    return (
        <div className="description">
            <p>{weather[0].weather}</p>
        </div>
    )
}