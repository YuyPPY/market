import { useState } from 'react';
import { Modal, Button, Input, SelectPicker } from 'rsuite';

const provinceData = [
    {
        name: "Vientiane Capital",
        districts: ["Chanthabouly", "Sikhottabong", "Sisattanak", "Xaysetha", "Naxaithong", "Xaythany", "Hadxaifong"]
    },
    {
        name: "Luang Prabang",
        districts: ["Luang Prabang", "Xieng Ngeun", "Pak Ou", "Ngoi", "Nambak", "Pakxeng", "Chomphet", "Phonxay"]
    },
    {
        name: "Savannakhet",
        districts: ["Kaisone Phomvihane", "Outhoumphone", "Phin", "Sepone", "Vilabouly", "Thapangthong", "Songkhon", "Champhone"]
    },
    {
        name: "Champasak",
        districts: ["Pakse", "Phonthong", "Champasak", "Pathoumphone", "Sanasomboun", "Bachieng Chaleunsouk", "Sukhuma"]
    },
    {
        name: "Xieng Khouang",
        districts: ["Pek", "Kham", "Khoune", "Mokmai", "Phaxay", "Phoukoud"]
    },
    {
        name: "Bolikhamxay",
        districts: ["Pakxan", "Thaphabath", "Bolikhan", "Khamkeut", "Viengthong"]
    },
    {
        name: "Bokeo",
        districts: ["Houayxay", "Tonpheung", "Meung", "Pha Oudom"]
    },
    {
        name: "Attapeu",
        districts: ["Xaysetha", "Sanamxay", "Phouvong", "Samakkhixay", "Sanxay"]
    }
];

const MarketModal = ({ open, handleClose }) => {
    
    
    const [formData, setFormData] = useState({
        market_name: '',
        province: '',
        district: '',
        village: '',
        description: '',
    });

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [districtOptions, setDistrictOptions] = useState([]);

    const handleProvinceChange = (value) => {
        setSelectedProvince(value);

        const selectedProvinceData = provinceData.find((province) => province.name === value);
        if (selectedProvinceData) {
            setDistrictOptions(
                selectedProvinceData.districts.map((district) => ({ label: district, value: district }))
            );
        } else {
            setDistrictOptions([]); 
        }
       
        setFormData((prevData) => ({
            ...prevData,
            province: value,
            district: '', 
        }));
    };
    const handleInputChange = (name,value) => {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
       
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        handleClose(); 
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title className="py-3 fs-3">
                    ເພີ່ມຂໍ້ມູນ
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit} >
                <Modal.Body>
                    <div className="row">
                        <div className="mb-2 col-12">
                            <label className="form-label" htmlFor="nameMarket">ຊື່ຕະຫຼາດ </label>
                            <Input
                                type="text"
                                placeholder="ປ້ອນຊື່ຕະຫຼາດ"
                                value={formData.market_name}
                                onChange={(e)=>handleInputChange('market_name',e)}
                            />
                        </div>
                        <div className=" col-sm-6 mb-2">
                            <label className="form-label" htmlFor="province">ແຂວງ</label>
                            <SelectPicker block
                                data={provinceData.map((province) => ({
                                    label: province.name,
                                    value: province.name
                                }))}
                                searchable={false}
                                placeholder="Select a Province"
                                onChange={handleProvinceChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-2">
                            <label className="form-label" htmlFor="district">ເມືອງ</label>
                            <SelectPicker block
                                data={districtOptions}
                                searchable={false}
                                placeholder="Select a District"
                                disabled={!selectedProvince} // Disable if no province selected
                                onChange={(value) => setFormData({ ...formData, district: value })}
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label" htmlFor="village">ບ້ານ</label>
                            <Input
                                placeholder="ປ້ອນຊື່ບ້ານ"
                                value={formData.village}
                                onChange={(e)=>handleInputChange('village', e)}
                                data-parsley-required="true"
                            />
                        </div>
                        <div className="col-12 mb-3">
                            <label className=" form-label" htmlFor="description">ລາຍລະລຽດ</label>

                            <Input as='textarea'
                                placeholder="ປ້ອນລາຍລະລຽດ"
                                value={formData.description}
                                onChange={(e)=>handleInputChange('description',e)}
                                data-parsley-required="true"
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit} appearance="primary">
                        ບັນທຶກ
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        ຍົກເລີກ
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default MarketModal;


