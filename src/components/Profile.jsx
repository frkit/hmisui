import React from 'react'

function Profile() {
  return (
    <>
     <div className="user-panel" >
        <div className="image text-center">
          <img src="dist/img/img1.jpg" className="img-circle" alt="User Image" />{" "}
        </div>
        <div className="info">
          <p>Alexander Pierce</p>
          <a href="#">
            <i className="fa fa-cog" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-envelope-o" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-power-off" />
          </a>{" "}
        </div>
      </div>
      
    </>
  )
}

export default Profile