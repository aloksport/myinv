function DashboardTopCard() {
    return (
        <div className="row">
                <div className="col-md-12 grid-margin transparent">
                    <div className="row">
                    <div className="col-md-3 mb-4 stretch-card transparent">
                        <div className="card card-tale">
                        <div className="card-body">
                            <p className="mb-4">Today’s Request</p>
                            <p className="fs-30 mb-2">5</p>
                            {/*<p>10.00% (30 days)</p>*/}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 stretch-card transparent">
                        <div className="card card-dark-blue">
                        <div className="card-body">
                            <p className="mb-4">Total Request</p>
                            <p className="fs-30 mb-2">10</p>
                            {/*<p>22.00% (30 days)</p>*/}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4  stretch-card transparent">
                        <div className="card card-light-blue">
                        <div className="card-body">
                            <p className="mb-4">Resolve</p>
                            <p className="fs-30 mb-2">2</p>
                            {/*<p>2.00% (30 days)</p>*/}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3  mb-4 stretch-card transparent">
                        <div className="card card-light-danger">
                        <div className="card-body">
                            <p className="mb-4">Pending</p>
                            <p className="fs-30 mb-2">4</p>
                            {/*<p>0.22% (30 days)</p>*/}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

      );
}

export default DashboardTopCard;