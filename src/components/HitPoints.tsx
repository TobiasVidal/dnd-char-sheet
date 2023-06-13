function HitPoints({ hitPoints }: { hitPoints: number }) {
    return <div className="mt-4">
        <p className="text-center">Hitpoints</p>
        <div className="row text-end">
            <div className="col-4">
                <input className="form-control" type="number" />
                <label><small>Temporary</small></label>
            </div>
            <div className="col-4">
                <input className="form-control" type="number" />
                <label><small>Current</small></label>
            </div>
            <div className="col-4">
                <input className="form-control" type="number" value={hitPoints} readOnly />
                <label><small>Max</small></label>
            </div>
        </div>
    </div>
}

export default HitPoints;