
function UserRequestData() {
    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <p className="card-title mb-0">Requested Items</p>
                        <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mouse</td>
                                <td className="font-weight-bold">1</td>
                                <td>20 Oct 2024</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Keyboard</td>
                                <td className="font-weight-bold">2</td>
                                <td>13 Jun 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monitor</td>
                                <td className="font-weight-bold">1</td>
                                <td>19 Oct 2024</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>LAN Wire</td>
                                <td className="font-weight-bold">2</td>
                                <td>30 Sep 2024</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      );
}

export default UserRequestData;