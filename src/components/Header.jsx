import React from 'react'

function Header() {
  return (
    <>
       <header className="main-header">
    {/* Logo */}
    <a href="index.html" className="logo blue-bg">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">
        <img src="dist/img/logo-n.png" alt="" />
      </span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">
        <img src="dist/img/logo.png" alt="" />
      </span>{" "}
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar blue-bg navbar-static-top">
      {/* Sidebar toggle button*/}
      <ul className="nav navbar-nav pull-left">
        <li>
          <a className="sidebar-toggle" data-toggle="push-menu" href="" />{" "}
        </li>
      </ul>
      <div className="pull-left search-box">
        <form action="#" method="get" className="search-form">
          <div className="input-group">
            <input
              name="search"
              className="form-control"
              placeholder="Search..."
              type="text"
            />
            <span className="input-group-btn">
              <button
                type="submit"
                name="search"
                id="search-btn"
                className="btn btn-flat"
              >
                <i className="fa fa-search" />{" "}
              </button>
            </span>
          </div>
        </form>
        {/* search form */}{" "}
      </div>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* Messages: style can be found in dropdown.less*/}
          <li className="dropdown messages-menu">
            {" "}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              {" "}
              <i className="fa fa-envelope-o" />
              <div className="notify">
                {" "}
                <span className="heartbit" /> <span className="point" />{" "}
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 4 new messages</li>
              <li>
                <ul className="menu">
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src="dist/img/img1.jpg"
                          className="img-circle"
                          alt="User Image"
                        />{" "}
                        <span className="profile-status online pull-right" />
                      </div>
                      <h4>Alex C. Patton</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">9:30 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src="dist/img/img3.jpg"
                          className="img-circle"
                          alt="User Image"
                        />{" "}
                        <span className="profile-status offline pull-right" />
                      </div>
                      <h4>Nikolaj S. Henriksen</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">10:15 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src="dist/img/img2.jpg"
                          className="img-circle"
                          alt="User Image"
                        />{" "}
                        <span className="profile-status away pull-right" />
                      </div>
                      <h4>Kasper S. Jessen</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">8:45 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src="dist/img/img4.jpg"
                          className="img-circle"
                          alt="User Image"
                        />{" "}
                        <span className="profile-status busy pull-right" />
                      </div>
                      <h4>Florence S. Kasper</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">12:15 AM</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href="#">View All Messages</a>
              </li>
            </ul>
          </li>
          {/* Notifications: style can be found in dropdown.less */}
          <li className="dropdown messages-menu">
            {" "}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              {" "}
              <i className="fa fa-bell-o" />
              <div className="notify">
                {" "}
                <span className="heartbit" /> <span className="point" />{" "}
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="header">Notifications</li>
              <li>
                <ul className="menu">
                  <li>
                    <a href="#">
                      <div className="pull-left icon-circle red">
                        <i className="icon-lightbulb" />
                      </div>
                      <h4>Alex C. Patton</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">9:30 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left icon-circle blue">
                        <i className="fa fa-coffee" />
                      </div>
                      <h4>Nikolaj S. Henriksen</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">1:30 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left icon-circle green">
                        <i className="fa fa-paperclip" />
                      </div>
                      <h4>Kasper S. Jessen</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">9:30 AM</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left icon-circle yellow">
                        <i className="fa  fa-plane" />
                      </div>
                      <h4>Florence S. Kasper</h4>
                      <p>I've finished it! See you so...</p>
                      <p>
                        <span className="time">11:10 AM</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href="#">Check all Notifications</a>
              </li>
            </ul>
          </li>
          {/* User Account: style can be found in dropdown.less */}
          <li className="dropdown user user-menu p-ph-res">
            {" "}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              {" "}
              <img
                src="dist/img/img1.jpg"
                className="user-image"
                alt="User Image"
              />{" "}
              <span className="hidden-xs">Alexander Pierce</span>{" "}
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <div className="pull-left user-img">
                  <img
                    src="dist/img/img1.jpg"
                    className="img-responsive"
                    alt="User"
                  />
                </div>
                <p className="text-left">
                  Florence Douglas <small>florence@gmail.com</small>{" "}
                </p>
                <div className="view-link text-left">
                  <a href="#">View Profile</a>{" "}
                </div>
              </li>
              <li>
                <a href="#">
                  <i className="icon-profile-male" /> My Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-wallet" /> My Balance
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-envelope" /> Inbox
                </a>
              </li>
              <li role="separator" className="divider" />
              <li>
                <a href="#">
                  <i className="icon-gears" /> Account Setting
                </a>
              </li>
              <li role="separator" className="divider" />
              <li>
                <a href="#">
                  <i className="fa fa-power-off" /> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* Left side column. contains the logo and sidebar */}
    </>
  )
}

export default Header