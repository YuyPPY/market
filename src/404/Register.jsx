import { Uploader, Button } from 'rsuite';
import { useState } from 'react';
import { SelectPicker } from "rsuite"
import { useProvince, useDistrict } from "../config/selectOption"
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const itemPorvince = useProvince()

    const [pvid, setPvid] = useState(null)
   
    const showDistrict = (values) => {
        setPvid(values);
    };
    const [districtId, setDistrictId] = useState(null);
    const itemDistrict = useDistrict(pvid);
    const [value, setValue] = useState([]);

    const handleDistrictChange = (value) => {
        setDistrictId(value); // Set district ID when a district is selected
    };
    


    
    const [formData, setFormData] = useState({
        owner_name: '',
        owner_surname: '',
        owner_phone: '',
        owner_email: '',
        owner_village: '',
        district_name: '',
        province_name: '',
        document: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleFileChange = (fileList) => {
        console.log("Selected file list:", fileList);

        if (fileList.length > 0) {
            const selectedFile = fileList[0]; 
            setFormData((prev) => ({
                ...prev,
                document: selectedFile.name 
            }));
            setValue(fileList); 
        } else {
            setFormData((prev) => ({ ...prev, document: '' })); 
        }

        console.log("Form Data after file change:", formData);
    };    
    const handleSubmit = async (e) => {
        e.preventDefault();    
        const formdata = new FormData();
        Object.keys(formData).forEach(key => {
            formdata.append(key, formData[key]);
        });
    
        if (value.length > 0) {
            formdata.append("document", value[0].blobFile, value[0].name);
        }
        formdata.append("owner_district_id_fk", districtId);
    
        try {
            const response = await fetch('http://192.168.100.70:3000/owner', {
                method: 'POST',
                body: formdata, 
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log("Registration successful:", responseData);
                navigate("/home"); 
                // Optionally reset the form or show success message
            } else {
                const errorResponse = await response.json();
                console.error("Error in registration:", errorResponse);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };
    

    return (
        <div id="app" className="app">
            <div className="login login-v2 fw-bold bg-dark rounded-0">
                <div className="register-container bg-white p-4 text-dark rounded">
                    <div className="register-header mb-25px h1">
                        <div className="mb-1">Sign Up</div>
                        <small className="d-block fs-15px lh-16">Create your Color Admin Account. It’s free and always will be.</small>
                    </div>
                    <div className="register-content">
                        <form onSubmit={handleSubmit} className="fs-13px">
                            <div className="mb-3">
                                <label className="mb-2">ຊື່ ແລະ ນາມສະກຸນ <span className="text-danger">*</span></label>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-2 mb-md-0">
                                        <input type="text" className="form-control fs-13px" onChange={handleInputChange} name="owner_name" placeholder="ຊື່" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control fs-13px" onChange={handleInputChange} name="owner_surname" placeholder="ນາມສະກຸນ" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-2">Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control fs-13px" onChange={handleInputChange} name='owner_email' placeholder="Email address" />
                            </div>
                            <div className="mb-3">
                                <div className="row gx-3">
                                    <div className="mb-3">
                                        <label className="mb-2">ແຂວງ <span className="text-danger">*</span></label>
                                        <SelectPicker data={itemPorvince}  name='province_name' onChange={(value) => showDistrict(value)} placeholder='ເລືອກແຂວງ' block />
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2">ເມືອງ <span className="text-danger">*</span></label>
                                        <SelectPicker data={itemDistrict}onChange={handleDistrictChange}  name='district_name' placeholder='ເລືອກເມືອງ' block />

                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row gx-3">
                                    <div className="col-md-6">
                                        <label className="mb-2">ບ້ານ<span className="text-danger">*</span></label>
                                        <input type="text" name='owner_village' onChange={handleInputChange} className="form-control fs-13px" placeholder="ບ້ານ" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2">ເບີ<span className="text-danger">*</span></label>
                                        <input type="tel" name='owner_phone' onChange={handleInputChange} className="form-control fs-13px" placeholder="ເບີ" />
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                            <Uploader 
                                    fileList={value} 
                                    accept="image/*"  
                                    onChange={handleFileChange}
                                    multiple
                                >
                                    <Button>Select files...</Button>
                                </Uploader>
                              
                            </div>

                            <div className="form-check col-xl-12 mb-4">
                                <input className="form-check-input" type="checkbox" id="agreementCheckbox" />
                                <label className="form-check-label" htmlFor="agreementCheckbox">
                                    By clicking Sign Up, you agree to our <a href="javascript:;">Terms</a> and that you have read our <a href="javascript:;">Data Policy</a>, including our <a href="javascript:;">Cookie Use</a>.
                                </label>
                            </div>
                            <div className="mb-4">
                                <button type="submit" className="btn btn-theme d-block w-100 btn-lg h-45px fs-13px">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
