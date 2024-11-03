
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, SelectPicker } from "rsuite";
import { useProvince, useDistrict } from "../../config/selectOption";

const MarketHome = () => {
  const navigate = useNavigate();
  const itemProvince = useProvince();
  const [pvid, setPvid] = useState(null);
  const showDistrict = (values) => setPvid(values);
  const itemDistrict = useDistrict(pvid);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const newForm = () => setOpen(true);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.100.70:3000/market", {
          method: "GET",
          redirect: "follow",
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const marketName = event.target.marketName.value;
    const marketVillage = event.target.marketVillage.value;
    const marketDistrictIdFk = event.target.marketDistrictIdFk.value;
    const description = event.target.description.value;
    const ownerIdFk = 66; // Assuming owner ID is fixed for now

    const data = {
      market_name: marketName,
      market_village: marketVillage,
      market_district_id_fk: marketDistrictIdFk,
      description,
      owner_id_fk: ownerIdFk
    };

    console.log("Form Data:", data);

    try {
      const response = await fetch("http://192.168.100.70:3000/market", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response Data:", result);
      navigate("/marketHome");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="content" className="app-content">
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><a href="javascript:;" onClick={newForm}>ເພີ່ມຂໍ້ມູນ</a></li>
        <li className="breadcrumb-item active">ຂໍ້ມູນຕະຫຼາດ</li>
      </ol>
      <h1 className="page-header">ຂໍ້ມູນຕະຫຼາດ <small> ບ່ອນນີ້ແມ່ນຈັດການຂໍ້ມູນຕະຫຼາດ </small></h1>

      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-blue">
              <div className="stats-icon">
                <i className="fa fa-desktop"></i>
              </div>
              <div className="stats-info">
                <h4>{item.market_name || "Market Name"}</h4>
                <p>{item.description || "Description not available"}</p>
              </div>
              <div className="space-y-2">
                <p>{item.market_village || "Description not available"}</p>
                <p>{item.district_name || "Description not available"}</p>
                <p>{item.province_name || "Description not available"}</p>
              </div>
              <div className="stats-link">
                <Link to={`/zones/${item.market_id}`}>
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>ເພີ່ມ ຂໍ້ມູນຕະຫຼາດ</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group mb-2">
              <label className="form-label">ຊື່ຕະຫຼາດ</label>
              <input type="text" className="form-control fs-13px" name="marketName" placeholder="ຕະຫຼາດ" required />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">ລາຍລະອຽດ</label>
              <input type="text" className="form-control fs-13px" name="description" placeholder="ລາຍລະອຽດ" required />
            </div>
            <div className="row gx-3">
              <div className="col-md-4 form-group">
                <label className="form-label">ແຂວງ</label>
                <SelectPicker data={itemProvince} onChange={showDistrict} placeholder="ເລືອກແຂວງ" block />
              </div>
              <div className="col-md-4 form-group">
                <label className="form-label">ເມືອງ</label>
                <SelectPicker data={itemDistrict} placeholder="ເລືອກເມືອງ" block name="marketDistrictIdFk" />
              </div>
              <div className="col-md-4 form-group">
                <label className="form-label">ບ້ານ</label>
                <input type="text" className="form-control fs-13px" name="marketVillage" placeholder="ບ້ານ" required />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={handleClose} appearance="primary">ຕົກລົງ</Button>
            <Button onClick={handleClose} appearance="subtle">ຍົກເລິກ</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default MarketHome;
