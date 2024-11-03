import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header" className="app-header">
      <div className="navbar-header bg-teal-500 text-white ">
        <Link to={'/home'} className="navbar-brand text-white ">
          <img src='./assets/img/logo/plc2.png' className="navbar-logo w-100 rounded-circle "></img> <span className='fw-bolder'>ໜ້າຫຼັກຈັດການຕະຫຼາດ</span>
        </Link>
        {/* <button type="button" className="navbar-mobile-toggler " data-toggle="app-sidebar-mobile">
        <span className="icon-bar "></span>
        <span className="icon-bar text-white"></span>
        <span className="icon-bar text-white"></span>
      </button> */}
      </div>


      <div className="navbar-nav bg-teal-500">
        <div className="navbar-item navbar-form">
          <form action method="POST" name="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter keyword" />
              <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
        <div className="navbar-item dropdown">
          <a href="#" data-bs-toggle="dropdown" className="navbar-link dropdown-toggle icon ">
            <i className="fa fa-bell"></i>
            <span className="badge bg-red">5</span>
          </a>
          <div className="dropdown-menu media-list dropdown-menu-end">
            <div className="dropdown-header">NOTIFICATIONS (5)</div>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-bug media-object bg-gray-500"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading">Server Error Reports <i className="fa fa-exclamation-circle text-danger"></i></h6>
                <div className="text-muted fs-10px">3 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <img src="../assets/img/user/user-1.jpg" className="media-object" alt />
                <i className="fab fa-facebook-messenger text-blue media-object-icon"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading">John Smith</h6>
                <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                <div className="text-muted fs-10px">25 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <img src="../assets/img/user/user-2.jpg" className="media-object" alt />
                <i className="fab fa-facebook-messenger text-blue media-object-icon"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading">Olivia</h6>
                <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                <div className="text-muted fs-10px">35 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-plus media-object bg-gray-500"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New User Registered</h6>
                <div className="text-muted fs-10px">1 hour ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-envelope media-object bg-gray-500"></i>
                <i className="fab fa-google text-warning media-object-icon fs-14px"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New Email From John</h6>
                <div className="text-muted fs-10px">2 hour ago</div>
              </div>
            </a>
            <div className="dropdown-footer text-center">
              <a href="javascript:;" className="text-decoration-none">View more</a>
            </div>
          </div>
        </div>
        <div className="navbar-item navbar-user dropdown">
          <a href="#" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
            <img src="../assets/img/user/user-13.jpg" alt />
            <span>
              <span className="d-none d-md-inline">Adam Schwartz</span>
              <b className="caret"></b>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end me-1">
            <a href="extra_profile.html" className="dropdown-item">ຂໍ້ມູນສວ່ນໂຕ</a>
            <a href="extra_settings_page.html" className="dropdown-item">Settings</a>
            <div className="dropdown-divider">

            </div>
            <a href="login.html" className="dropdown-item">Log Out</a>
          </div>
        </div>
      </div>

    </div>
  )
}
