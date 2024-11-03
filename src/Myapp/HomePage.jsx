// eslint-disable-next-line no-unused-vars
import React from 'react'

function HomePage() {
  return (

    <div id="content" className="app-content bg-gray-400">

      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        {/* <li className="breadcrumb-item"><a href="javascript:;">Page Options</a></li> */}
      </ol>


      <h1 className="page-header">Blank Page <small>header small text goes here...</small></h1>
      <div className="row">

        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon"><i className="fa fa-desktop"></i></div>
            <div className="stats-info">
              <h4>TOTAL VISITORS</h4>
              <p>3,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-info">
            <div className="stats-icon"><i className="fa fa-link"></i></div>
            <div className="stats-info">
              <h4>BOUNCE RATE</h4>
              <p>20.44%</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-orange">
            <div className="stats-icon"><i className="fa fa-users"></i></div>
            <div className="stats-info">
              <h4>UNIQUE VISITORS</h4>
              <p>1,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-red">
            <div className="stats-icon"><i className="fa fa-clock"></i></div>
            <div className="stats-info">
              <h4>AVG TIME ON SITE</h4>
              <p>00:12:23</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}

export default HomePage