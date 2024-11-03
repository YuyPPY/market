import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "rsuite";

const Zones = () => {
  const navigate = useNavigate();
  const { market_id } = useParams(); // Get market_id from URL parameters
  const [open, setOpen] = React.useState(false);
  const [zones, setZones] = useState([]); // State to hold fetched zones
  const [loading, setLoading] = useState(true); // State for loading status
  const [zonesForm, setZonesForm] = useState([{ zone_name: '' }]);
  const handleClose = () => setOpen(false);

  const newForm = () => {
    setOpen(true);
  };
  useEffect(() => {
    const fetchZones = () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`http://192.168.100.70:3000/zone/market/${market_id}`, requestOptions)
        .then(response => response.json()) // Parse JSON response
        .then(data => {
          setZones(data); // Set fetched data to state
          setLoading(false); // Set loading to false
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false); // Set loading to false on error
        });
    };

    fetchZones(); // Call the fetch function
  }, [market_id]);

  const handleZoneChange = (index, event) => {
    const newZonesForm = [...zonesForm];
    newZonesForm[index].zone_name = event.target.value;
    setZonesForm(newZonesForm);
  };

  const addZone = () => {
    setZonesForm([...zonesForm, { zone_name: "" }]); // Add a new empty zone
  };
  const removeZone = (index) => {
    const newZonesForm = zonesForm.filter((_, i) => i !== index); // Remove zone at the given index
    setZonesForm(newZonesForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = zonesForm.map(zone => ({
      zone_name: zone.zone_name,
      market_id_fk: market_id,
    }));

    // Log the form data before sending
    console.log('Form Data:', data);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch("http://192.168.100.70:3000/zone", requestOptions)
      .then(response => {
        // Log the response status
        console.log('Response Status:', response.status);
        return response.json(); // Move this into the chain to catch errors
      })
      .then(result => {
        console.log('Success:', result);
        setOpen(false);
        navigate(`/zones/${market_id}`);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div id='content' className='app-content'>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
        <li className="breadcrumb-item"><a href="javascript:;" onClick={newForm}>ເພີ່ມຂໍ້ມູນ</a></li>
        <li className="breadcrumb-item active">ຂໍ້ມູນໂຊນ</li>
      </ol>
      <h1 className="page-header">ຂໍ້ມູນໂຊນ<small> ບ່ອນນີ້ແມ່ນຈັດການຂໍ້ມູນໂຊນ </small></h1>
      {/* Loading Indicator */}
      {loading ? (
        <p>Loading zones...</p>
      ) : (
        <div className="row">
          {zones.map((zone, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-blue">
                <div className="stats-icon"><i className="fa fa-cube"></i></div>
                <div className="stats-info">
                  <p>{zone.zone_name}</p>
                  <h4>ຈຳນວນຫ້ອງໃນໂຊນນີ້ 30</h4>
                </div>
                <div className="stats-link">
                  <Link to={`/rooms/${zone.zone_id}`}>
                    View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>ເພີ່ມຂໍ້ມູນໂຊນ</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            {zonesForm.map((zone, index) => (
              <div className="form-group mb-3 widget widget-stats bg-gray-300" key={index}>
                <div className="d-flex justify-content-between align-items-center mb-2" >
                <label htmlFor={`zone_name_${index}`} className="form-label text-black me-2">ຊື່ໂຊນ</label>
                <Button
                  onClick={() => removeZone(index)}
                  appearance="link"
                  color="red"
                  className=""
                >
                  <i className="fa fa-trash-can text-danger"></i>
                </Button>
                </div>
                <input
                  name={`zone_name_${index}`}
                  className="form-control"
                  type="text"
                  placeholder="ຊື່ໂຊນ"
                  required
                  value={zone.zone_name}
                  onChange={(event) => handleZoneChange(index, event)}
                />
                
              </div>
            ))}
            <Button onClick={addZone} appearance="link">
            <i className="fa fa-circle-plus "></i>
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Zones;
