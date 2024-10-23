import {  Link } from "react-router-dom";
function Login() {
    return (
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="../images/logo.png" alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <a
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        href="../../index.html"
                      >
                        SIGN IN
                      </a>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <Link to="/ForgetPassword" className="auth-link text-black">Forgot password?</Link>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      <Link to="/Register" className="text-primary">Create Account</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
      );
}

export default Login;