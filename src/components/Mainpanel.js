import Footer from "./Footer";
function Mainpanel() {
    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 className="font-weight-bold">Welcome Alok</h3>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 grid-margin transparent">
                    <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                        <div className="card card-tale">
                        <div className="card-body">
                            <p className="mb-4">Today’s Bookings</p>
                            <p className="fs-30 mb-2">4006</p>
                            <p>10.00% (30 days)</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                        <div className="card card-dark-blue">
                        <div className="card-body">
                            <p className="mb-4">Total Bookings</p>
                            <p className="fs-30 mb-2">61344</p>
                            <p>22.00% (30 days)</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                        <div className="card card-light-blue">
                        <div className="card-body">
                            <p className="mb-4">Number of Meetings</p>
                            <p className="fs-30 mb-2">34040</p>
                            <p>2.00% (30 days)</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 stretch-card transparent">
                        <div className="card card-light-danger">
                        <div className="card-body">
                            <p className="mb-4">Number of Clients</p>
                            <p className="fs-30 mb-2">47033</p>
                            <p>0.22% (30 days)</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <p className="card-title mb-0">Top Products</p>
                        <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Search Engine Marketing</td>
                                <td className="font-weight-bold">$362</td>
                                <td>21 Sep 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Search Engine Optimization</td>
                                <td className="font-weight-bold">$116</td>
                                <td>13 Jun 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Display Advertising</td>
                                <td className="font-weight-bold">$551</td>
                                <td>28 Sep 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay Per Click Advertising</td>
                                <td className="font-weight-bold">$523</td>
                                <td>30 Jun 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>E-Mail Marketing</td>
                                <td className="font-weight-bold">$781</td>
                                <td>01 Nov 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-danger">Cancelled</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Referral Marketing</td>
                                <td className="font-weight-bold">$283</td>
                                <td>20 Mar 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Social media marketing</td>
                                <td className="font-weight-bold">$897</td>
                                <td>26 Oct 2018</td>
                                <td className="font-weight-medium">
                                <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <Footer/>
        </div>
      );
}

export default Mainpanel;