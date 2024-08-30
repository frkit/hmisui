import React from 'react'

function Registrations() {
  return (
    <>
  
  {/* Content Wrapper. Contains page content */}
  <div
  className="content"
  style={{
    height: 'calc(100vh - 120px)', // Adjusts height to leave 20px white space at the bottom
    width: '100vw',
    backgroundColor: '#f2f2f2',
   
  }}
>
    {/* Content Header (Page header) */}
    <div className="content-header sty-one">
      <h1 className="text-black">Patient Registrations</h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="sub-bread">
          <i className="fa fa-angle-right" /> Forms
        </li>
        <li>
          <i className="fa fa-angle-right" /> Form Layouts
        </li>
      </ol>
    </div>
    {/* Main content */}
    <div className="content">
      <div className="row">
        <div className="col-lg-8">
          <div className="card ">
            <div className="card-header bg-blue">
              <h5 className="text-white m-b-0">
                Emergency Patient Registration
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group has-success">
                      <label className="control-label">Patient Name</label>
                      <input
                        className="form-control"
                        placeholder="Patient Name"
                        type="text"
                        autofocus=""
                      />
                      <span
                        className="fa fa-user form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">
                        Father / Husband Name
                      </label>
                      <input
                        className="form-control"
                        placeholder="Father / Husband Name"
                        type="text"
                      />
                      <span
                        className="fa fa-user form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group has-feedback">
                      <label className="control-label">Age</label>
                      <input
                        className="form-control"
                        placeholder="Age"
                        type="text"
                      />
                      <span
                        className="fa fa-envelope-o form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group has-feedback">
                      <label className="control-label">Y/M/D</label>
                      <select className="form-control">
                        <option value="Years">Years</option>
                        <option value="Month">Month</option>
                        <option value="Days">Days</option>
                      </select>
                      <span
                        className="fa fa-envelope-o form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Gender</label>
                      <select className="form-control">
                        <option value="" />
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                      </select>
                      <span
                        className="fa fa-phone form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">CNIC</label>
                      <input
                        className="form-control"
                        placeholder="CNIC"
                        type="text"
                      />
                      <span
                        className="fa fa-briefcase form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">City</label>
                      <select className="form-control">
                        <option value="Peshawar">Peshawar</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                      </select>
                      <span
                        className="fa fa-globe form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Address</label>
                      <input
                        className="form-control"
                        placeholder="Address"
                        type="text"
                      />
                      <span
                        className="fa fa-globe form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Ref Doctor</label>
                      <select className="form-control">
                        <option value="Peshawar">
                          Dr Muhammad Nawaz Cardiology
                        </option>
                        <option value="Karachi">Dr Shad Muhammad CMO</option>
                        <option value="Lahore">
                          Dr Mir Muhammad Peads Consultant
                        </option>
                      </select>
                      <span
                        className="fa fa-globe form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Department</label>
                      <select className="form-control">
                        <option value="Cardiology">Cardiology</option>
                        <option value="Urology">Urology</option>
                        <option value="Peads">Peads</option>
                      </select>
                      <span
                        className="fa fa-globe form-control-feedback"
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-success"
                      onclick="window.location.href='form-psychiatry.html';"
                    >
                      Save Patient
                    </button>
                    <button type="submit" className="btn btn-danger">
                      Clear
                    </button>{" "}
                    <button type="submit" className="btn btn-warning">
                      Print
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div>
            {/* Widget: user widget style 1 */}
            <div className="box box-widget widget-user-2">
              {/* Add the bg color to the header using any of the bg-* classes */}
              <div className="widget-user-header bg-blue">
                <div className="widget-user-image">
                  {" "}
                  <img src="dist/img/budget.png" alt="User Avatar" />{" "}
                </div>
                {/* /.widget-user-image */}
                <h3 className="widget-user-username">Counter No 2</h3>
                <h5 className="widget-user-desc">Farhan Adil</h5>
              </div>
              <div className="box-footer no-padding">
                <ul className="nav nav-stacked">
                  <li>
                    <a href="#">
                      Date &amp; Time{" "}
                      <span className="pull-right badge bg-blue">
                        02-05-2023 01:02 PM
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Today Cash{" "}
                      <span className="pull-right badge bg-aqua">2000</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Visit No
                      <span className="pull-right badge bg-green">01</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Last MR
                      <span className="pull-right badge bg-green">MR0085</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.widget-user */}
            <br />
            {/* comment */}
            {/* Widget: user widget style 1 */}
            <div className="box box-widget widget-user-2">
              {/* Add the bg color to the header using any of the bg-* classes */}
              <div className="widget-user-header bg-blue">
                <div className="widget-user-image">
                  {" "}
                  <img src="dist/img/budget.png" alt="User Avatar" />{" "}
                </div>
                {/* /.widget-user-image */}
                <h3 className="widget-user-username">Emergency</h3>
                <h5 className="widget-user-desc">Information</h5>
              </div>
              <div className="box-footer no-padding">
                <ul className="nav nav-stacked">
                  <li>
                    <a href="#">
                      Today Patient{" "}
                      <span className="pull-right badge bg-blue">15</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Today Revenue{" "}
                      <span className="pull-right badge bg-aqua">25</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cancel Registration
                      <span className="pull-right badge bg-green">30</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Duplicate Registration
                      <span className="pull-right badge bg-green">30</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.widget-user */}
          </div>
        </div>
      </div>
    </div>
    {/* /.content */}
  </div>
  
 

    </>
  )
}

export default Registrations