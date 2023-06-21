const Card: React.FC<Dashboard.CardT> = ({ active = false, title, to }) => {
    return (
        <div className="card shadow border-0 col-md-3 p-3 rounded-3">
            <h4 className="mb-5">{title.toUpperCase()}</h4>
            <button
                className={`btn bg-${
                    active ? "success" : "secondary"
                } text-light w-fit ms-auto badge fw-normal`}
                disabled={!active}
                onClick={() => window.open(`/instructions/${to}`)}
            >
                Kerjakan
            </button>
        </div>
    )
}

export default Card
