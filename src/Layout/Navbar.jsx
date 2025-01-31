import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <>
        <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
          <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
            <div className="menu">
              <div className="menu-profile">
                <a href="javascript:;" className="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
                  <div className="menu-profile-cover with-shadow"></div>
                  <div className="menu-profile-image">
                    <img src="../assets/img/user/user-13.jpg" alt />
                  </div>
                  <div className="menu-profile-info">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        Sean Ngu
                      </div>
                      <div className="menu-caret ms-auto"></div>
                    </div>
                    <small>Frontend developer</small>
                  </div>
                </a>
              </div>
              <div id="appSidebarProfileMenu" className="collapse">
                <div className="menu-item pt-5px">
                  <a href="javascript:;" className="menu-link">
                    <div className="menu-icon"><i className="fa fa-cog"></i></div>
                    <div className="menu-text">Settings</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="javascript:;" className="menu-link">
                    <div className="menu-icon"><i className="fa fa-pencil-alt"></i></div>
                    <div className="menu-text"> Send Feedback</div>
                  </a>
                </div>
                <div className="menu-item pb-5px">
                  <a href="javascript:;" className="menu-link">
                    <div className="menu-icon"><i className="fa fa-question-circle"></i></div>
                    <div className="menu-text"> Helps</div>
                  </a>
                </div>
                <div className="menu-divider m-0"></div>
              </div>
              <div className="menu-header">
                ເອົາຫຍັງດີຈິດໃຈ
              </div>
              <div className="menu-item">
                <Link to={'/'} className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="menu-text">ໜ້າຫຼັກ</div>
                </Link>
              </div>
              <div className="menu-item">
                <Link to={'/employee'} className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="menu-text">ພະນັກງານ</div>
                </Link>
              </div>
              <div className="menu-item">
                <Link to={'/costumer'} className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fa fa-address-book"></i>
                  </div>
                  <div className="menu-text">ລູກຄ້າ</div>
                </Link>
              </div>
              <div className="menu-item has-sub">
                <a href="/marketHome" className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fa fa-map-location"></i></div>
                  <div className="menu-text">ຕະຫຼາດ</div>
                  <div className="menu-caret"></div>
                </a>
                <div className="menu-submenu">
                <div className="menu-item">
                    <a href="/marketHome" className="menu-link"><div className="menu-text">ຕະຫຼາດ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="/zones" className="menu-link"><div className="menu-text">ໂຊນ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="/rooms" className="menu-link"><div className="menu-text">ຫ້ອງ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="/paymentType" className="menu-link"><div className="menu-text">ປະເພດການຈ່າຍເງິນ</div></a>
                  </div>
                </div>
              </div>
              <div className="menu-item has-sub">
                <a href="#" className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fa fa-box-archive"></i></div>
                  <div className="menu-text">ລາຍງານ</div>
                  <div className="menu-caret"></div>
                </a>
                <div className="menu-submenu">
                  <div className="menu-item">
                    <a href="index.html" className="menu-link"><div className="menu-text">ລາຍງານລາຍຮັບ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="index_v2.html" className="menu-link"><div className="menu-text">ລາຍງານລູກຄ້າຄ້າງຈ່າຍ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="index_v3.html" className="menu-link"><div className="menu-text">ລາຍງານຫ້ອງຍັງເຫລືອ</div></a>
                  </div>
                </div>
              </div>
              <div className="menu-item has-sub">
                <a href="#" className="menu-link fs-15px fs-bold">
                  <div className="menu-icon">
                    <i className="fa-solid fa-sliders"></i></div>
                  <div className="menu-text">ການຕັ້ງຄ່າ</div>
                  <div className="menu-caret"></div>
                </a>
                <div className="menu-submenu">
                  <div className="menu-item">
                    <a href="index.html" className="menu-link"><div className="menu-text">ຂໍ້ມູນສ່ວນໂຕ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="index_v2.html" className="menu-link"><div className="menu-text">ລູກຄ້າ</div></a>
                  </div>
                  <div className="menu-item">
                    <a href="index_v3.html" className="menu-link"><div className="menu-text">ພະນັກງານ</div></a>
                  </div>
                </div>
              </div>

              <div className="menu-item d-flex">
                <a href="javascript:;" className="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none" data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left"></i></a>
              </div>

            </div>

          </div>

        </div>
        {/* <div className="app-sidebar-bg" data-bs-theme="dark"></div> */}
        <div className="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" className="stretched-link"></a></div>

      </>
    </>
  )
}
