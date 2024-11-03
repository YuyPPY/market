
export default function Login() {
    return (
        <>
            <div id="app" className="app">
                <div className="login login-v2 fw-bold bg-dark  rounded-0">
                    <div className="login-container bg-white p-4 text-dark rounded">
                        <div className="logo text-center">
                            <img src="./assets/img/logo/PLC.png" alt="" className='rounded-circle w-50 ' />
                        </div>
                        <div className="login-header">
                            <div className="brand">
                                <div className="d-flex align-items-center">
                                    <img src='./assets/img/logo/login.webp' className='w-15' /> <b className='me-2'>PLC </b> Admin
                                </div>
                                <small>ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບບໍ່ລິຫານຈັດການ</small>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-user text-red"></i>
                            </div>
                        </div>


                        <div className="login-content">
                            <form action="index.html" method="GET">
                                <div className="mb-3">
                                    <label className="mb-2">Name <span className="text-danger">*</span></label>
                                    <div className="row gx-3">
                                        <div className="col-md-6 mb-2 mb-md-0">
                                            <input type="text" className="form-control fs-13px" placeholder="First name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control fs-13px" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-10px">
                                    <input type="text" className="form-control fs-13px h-10px border border-blue" placeholder="ຊື່ຜູ້ເຂົ້າໃຊ້" id="emailAddress" />
                                    <label htmlFor="emailAddress" className="d-flex align-items-center text-gray-600 fs-13px">ຊື່ຜູ້ເຂົ້າໃຊ້</label>
                                </div>

                                <div className="form-floating mb-10px">
                                    <input type="password" className="form-control fs-13px h-10px border  border-blue" placeholder="ລະຫັດຜ່ານ" />
                                    <label htmlFor="emailAddress" className="d-flex align-items-center text-gray-600 fs-13px">ລະຫັດຜ່ານ</label>
                                </div>
                                <div className="form-check mb-10px ">
                                    <input className="form-check-input border" type="checkbox" value="1" id="rememberMe" />
                                    <label className="form-check-label fs-13px text-gray-500" htmlFor="rememberMe">
                                        ສະແດງລະຫັດຜ່ານ
                                    </label>
                                </div>
                                <div className="mb-10px">
                                <a href="/register" className="justify-content-end ">ສະໜັກສະມາຊິກ</a>


                                </div>

                                <div className="mb-10px">
                                    <button type="submit" className="btn btn-blue d-block w-100 h-45px btn-lg">ເຂົ້າສູ່ລະບົບ</button>
                                </div>

                                <div className="text-gray-500">
                                    PLC <a href="#" className="text-white">V</a> 1.0.1
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
