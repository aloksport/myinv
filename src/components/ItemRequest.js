function ItemRequest(){
    return(
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">User Request </h4>
                <p className="card-description">Please fill the details</p>
                <form className="forms-sample">
                    <div className="form-group">
                    <label htmlFor="exampleInputUsername1">Select Item</label>
                    <select className="form-control" id="exampleSelectItem">
                        <option>Mouse</option>
                        <option>Keyboard</option>
                        <option>Monitor</option>
                        <option>UPS</option>
                        <option>Others</option>
                    </select>

                    </div>
                    <div className="form-group">
                    <label for="exampleFormControlSelect3">Quantity</label>
                    <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Reason</label>
                    <textarea
                        className="form-control"
                        id="exampleTextarea1"
                        rows={4}
                        defaultValue={""}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">
                    Submit
                    </button>
                    <button className="btn btn-light">Cancel</button>
                </form>
                </div>
            </div>
            </div>
        </div>        
    );
};
export default ItemRequest;