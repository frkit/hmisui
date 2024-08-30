import React from 'react'
import Menu from './Menu'

function Dashboard() {
  return (

   <>
  {/* Content Wrapper. Contains page content */}
 
  <div className="content">
    
    {/* Content Header (Page header) */}
    <div className="content-header sty-one">
      <h1>Dashboard</h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <i className="fa fa-angle-right" /> Dashboard
        </li>
      </ol>
    </div>
    {/* Main content */}
    <div className="content">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="info-box bg-darkblue">
            {" "}
            <span className="info-box-icon bg-transparent">
              <i className="ti-stats-up text-white" />
            </span>
            <div className="info-box-content">
              <h6 className="info-box-text text-white">New Orders</h6>
              <h1 className="text-white">1,150</h1>
              <span className="progress-description text-white">
                {" "}
                70% Increase in 30 Days{" "}
              </span>{" "}
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="info-box bg-green text-white">
            {" "}
            <span className="info-box-icon bg-transparent">
              <i className="ti-face-smile" />
            </span>
            <div className="info-box-content">
              <h6 className="info-box-text text-white">New Users</h6>
              <h1 className="text-white">565</h1>
              <span className="progress-description text-white">
                {" "}
                45% Increase in 30 Days{" "}
              </span>{" "}
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="info-box bg-aqua">
            {" "}
            <span className="info-box-icon bg-transparent">
              <i className="ti-bar-chart" />
            </span>
            <div className="info-box-content">
              <h6 className="info-box-text text-white">Online Revenue</h6>
              <h1 className="text-white">$5,450</h1>
              <span className="progress-description text-white">
                {" "}
                50% Increase in 30 Days{" "}
              </span>{" "}
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="info-box bg-orange">
            {" "}
            <span className="info-box-icon bg-transparent">
              <i className="ti-money" />
            </span>
            <div className="info-box-content">
              <h6 className="info-box-text text-white">Total Profit</h6>
              <h1 className="text-white">$8,188</h1>
              <span className="progress-description text-white">
                {" "}
                35% Increase in 30 Days{" "}
              </span>{" "}
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        <div className="col-lg-7 col-xlg-9">
          <div className="info-box">
            <div className="d-flex flex-wrap">
              <div>
                <h4 className="text-black">Analytics Overview</h4>
              </div>
              <div className="ml-auto">
                <ul className="list-inline">
                  <li className="text-info">
                    {" "}
                    <i className="fa fa-circle" /> Sales
                  </li>{" "}
                  <li className="text-blue">
                    {" "}
                    <i className="fa fa-circle" /> Earning
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <canvas id="line-chart" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xlg-3">
          <div className="info-box">
            <div className="d-flex flex-wrap">
              <div>
                <h4 className="text-black">Our Visitors</h4>
              </div>
            </div>
            <div className="m-t-2">
              <canvas id="pie-chart" height={210} />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="info-box">
            <h4 className="m-b-2 text-black">Recent Activities</h4>
            <div className="sl-item sl-primary">
              <div className="sl-content">
                <small className="text-muted">
                  <i className="fa fa-user position-left" /> 5 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                  Nullam sagittis mattis arcu uspen disse.
                </p>
              </div>
            </div>
            <div className="sl-item sl-danger">
              <div className="sl-content">
                <small className="text-muted">
                  <i className="fa fa-user position-left" /> 8 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                  Nullam sagittis mattis arcu uspen disse.
                </p>
              </div>
            </div>
            <div className="sl-item sl-success">
              <div className="sl-content">
                <small className="text-muted">
                  <i className="fa fa-user position-left" /> 10 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                  Nullam sagittis mattis arcu uspen disse.
                </p>
              </div>
            </div>
            <div className="sl-item sl-warning">
              <div className="sl-content">
                <small className="text-muted">
                  <i className="fa fa-user position-left" /> 12 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                  Nullam sagittis mattis arcu uspen disse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="info-box">
            <div className="d-flex flex-wrap">
              <div>
                <h4 className="m-b-2 text-black">Line Chart with Area</h4>
              </div>
            </div>
            <div className="ct-line-chart" style={{ height: 350 }} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div>
            {/* Widget: user widget style 1 */}
            <div className="box box-widget widget-user-2">
              {/* Add the bg color to the header using any of the bg-* classes */}
              <div className="widget-user-header bg-yellow">
                <div className="widget-user-image">
                  {" "}
                  <img
                    className="img-circle"
                    src="dist/img/img5.jpg"
                    alt="User Avatar"
                  />{" "}
                </div>
                {/* /.widget-user-image */}
                <h3 className="widget-user-username">Nick Lampard</h3>
                <h5 className="widget-user-desc">Lead Developer</h5>
              </div>
              <div className="box-footer no-padding">
                <ul className="nav nav-stacked">
                  <li>
                    <a href="#">
                      Projects{" "}
                      <span className="pull-right badge bg-blue">15</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tasks <span className="pull-right badge bg-aqua">25</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Completed Projects{" "}
                      <span className="pull-right badge bg-green">30</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Followers{" "}
                      <span className="pull-right badge bg-red">150</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Completed Projects{" "}
                      <span className="pull-right badge bg-green">30</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.widget-user */}
          </div>
          <div className="m-t-3">
            {/* Widget: user widget style 1 */}
            <div className="box box-widget widget-user">
              {/* Add the bg color to the header using any of the bg-* classes */}
              <div
                className="widget-user-header bg-black"
                style={{ background: 'url("dist/img/user-bg.jpg")' }}
              >
                <h3 className="widget-user-username">Angela Dominic</h3>
                <h5 className="widget-user-desc">
                  Web Designer &amp; Developer
                </h5>
              </div>
              <div className="widget-user-image">
                {" "}
                <img
                  className="img-circle"
                  src="dist/img/img5.jpg"
                  alt="User Avatar"
                />{" "}
              </div>
              <div className="box-footer">
                <div className="text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed
                    cursus ante.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">1,500</h5>
                      <span className="description-text">SALES</span>{" "}
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">10,350</h5>
                      <span className="description-text">FOLLOWERS</span>{" "}
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">35</h5>
                      <span className="description-text">PRODUCTS</span>{" "}
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
            </div>
            {/* /.widget-user */}
          </div>
        </div>
        <div className="col-lg-8">
          <div className="info-box">
            <div className="card tab-style1">
              {/* Nav tabs */}
              <ul className="nav nav-tabs profile-tab" role="tablist">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-expanded="true"
                  >
                    Activity
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-expanded="false"
                  >
                    Profile
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    Settings
                  </a>{" "}
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-expanded="true"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="user-img pull-left">
                          {" "}
                          <img
                            src="dist/img/img3.jpg"
                            className="img-circle img-responsive"
                            alt="User Image"
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="mail-contnet">
                          <h5>Florence Douglas</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                            elementum imperdiet. Duis sagittis ipsum raesent
                            mauris nec.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam.
                          </p>
                          <div className="row">
                            <div className="col-lg-3 col-xs-4 m-bot-2">
                              <img
                                src="dist/img/img7.jpg"
                                alt="user"
                                className="img-responsive img-rounded"
                              />
                            </div>
                            <div className="col-lg-3 col-xs-4 m-bot-2">
                              <img
                                src="dist/img/img8.jpg"
                                alt="user"
                                className="img-responsive img-rounded"
                              />
                            </div>
                            <div className="col-lg-3 col-xs-4 m-bot-2">
                              <img
                                src="dist/img/img9.jpg"
                                alt="user"
                                className="img-responsive img-rounded"
                              />
                            </div>
                            <div className="col-lg-3 col-xs-4 m-bot-2">
                              <img
                                src="dist/img/img10.jpg"
                                alt="user"
                                className="img-responsive img-rounded"
                              />
                            </div>
                          </div>
                          <div className="like-comm m-t-1">
                            {" "}
                            <a href="#">150 comment</a>{" "}
                            <a href="#">
                              <i className="fa fa-heart text-danger" /> 25 Love
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row m-t-3">
                      <div className="col-lg-2">
                        <div className="user-img pull-left">
                          {" "}
                          <img
                            src="dist/img/img5.jpg"
                            className="img-circle img-responsive"
                            alt="User Image"
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="mail-contnet">
                          <h5>Florence Douglas</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                            elementum imperdiet. Duis sagittis ipsum raesent
                            mauris nec.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam.
                          </p>
                          <div className="like-comm m-t-1">
                            {" "}
                            <a href="#">150 comment</a>{" "}
                            <a href="#">
                              <i className="fa fa-heart text-danger" /> 25 Love
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*second tab*/}
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-expanded="false"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3 col-xs-6 b-r">
                        {" "}
                        <strong>Full Name</strong> <br />
                        <p className="text-muted">Florence Douglas</p>
                      </div>
                      <div className="col-lg-3 col-xs-6 b-r">
                        {" "}
                        <strong>Mobile</strong> <br />
                        <p className="text-muted">(123) 456 7890</p>
                      </div>
                      <div className="col-lg-3 col-xs-6 b-r">
                        {" "}
                        <strong>Email</strong> <br />
                        <p className="text-muted">florencedouglas@admin.com</p>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                      Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                      ac, enim.
                    </p>
                    <p>
                      Suspen disse potenti. Sed lectus est, commodo eu pre tium
                      eu, pulvinar porttitor feugiat. Aliquam efficitur feugiat
                      accumsan. Nulla hendrerit cursus nisi nec mattis.{" "}
                    </p>
                    <h4 className="font-medium m-t-3">Skill Set</h4>
                    <hr />
                    <div>
                      <h6 className="m-t-3">
                        Wordpress <span className="pull-right">80%</span>
                      </h6>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "80%", height: 6 }}
                        >
                          {" "}
                          <span className="sr-only">50% Complete</span>{" "}
                        </div>
                      </div>
                      <h5 className="m-t-3">
                        HTML 5 <span className="pull-right">90%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%", height: 6 }}
                        >
                          {" "}
                          <span className="sr-only">50% Complete</span>{" "}
                        </div>
                      </div>
                      <h5 className="m-t-3">
                        jQuery <span className="pull-right">50%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "50%", height: 6 }}
                        >
                          {" "}
                          <span className="sr-only">50% Complete</span>{" "}
                        </div>
                      </div>
                      <h5 className="m-t-3">
                        Photoshop <span className="pull-right">70%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "70%", height: 6 }}
                        >
                          {" "}
                          <span className="sr-only">50% Complete</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="settings" role="tabpanel">
                  <div className="card-body">
                    <form className="form-horizontal form-material">
                      <div className="form-group">
                        <label className="col-md-12">Full Name</label>
                        <div className="col-md-12">
                          <input
                            placeholder="Florence Douglas"
                            className="form-control form-control-line"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="example-email" className="col-md-12">
                          Email
                        </label>
                        <div className="col-md-12">
                          <input
                            placeholder="florencedouglas@admin.com"
                            className="form-control form-control-line"
                            name="example-email"
                            id="example-email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Password</label>
                        <div className="col-md-12">
                          <input
                            defaultValue="password"
                            className="form-control form-control-line"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Phone No</label>
                        <div className="col-md-12">
                          <input
                            placeholder="123 456 7890"
                            className="form-control form-control-line"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Message</label>
                        <div className="col-md-12">
                          <textarea
                            rows={5}
                            className="form-control form-control-line"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-12">Select Country</label>
                        <div className="col-sm-12">
                          <select className="form-control form-control-line">
                            <option>London</option>
                            <option>India</option>
                            <option>Usa</option>
                            <option>Canada</option>
                            <option>Thailand</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <button className="btn btn-success">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="soci-wid-box bg-twitter m-b-3">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-twitter-alt" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-twitter-alt" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-twitter-alt" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                {" "}
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Previous</span>{" "}
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                {" "}
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Next</span>{" "}
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="soci-wid-box bg-facebook m-b-3">
            <div
              id="carouselExampleControls1"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-facebook" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-facebook" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-facebook" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls1"
                role="button"
                data-slide="prev"
              >
                {" "}
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Previous</span>{" "}
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carouselExampleControls1"
                role="button"
                data-slide="next"
              >
                {" "}
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Next</span>{" "}
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="soci-wid-box bg-google-plus m-b-3">
            <div
              id="carouselExampleControls2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-google" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-google" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-12 text-center">
                    <div className="sco-icon">
                      <i className="ti-google" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio praesent libero sed cursus ante.
                    </p>
                    <p className="text-italic pt-1">- John Doe -</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls2"
                role="button"
                data-slide="prev"
              >
                {" "}
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Previous</span>{" "}
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carouselExampleControls2"
                role="button"
                data-slide="next"
              >
                {" "}
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />{" "}
                <span className="sr-only">Next</span>{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* /.content */}
    </div>
    {/* /.content-wrapper */}
   
  </div>
  
 
</>

   
  )
}

export default Dashboard