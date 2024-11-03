import React, { useState } from "react"
import { Link ,useParams} from "react-router-dom"
import { Modal, Button, SelectPicker } from "rsuite"
import { useProvince, useDistrict } from "../../config/selectOption"
const Rooms = () => {
  const {zone_id} = useParams(); 
  const itemPorvince = useProvince()

  const [pvid, setPvid] = useState(null)
  const showDistrict = (values) => {
    setPvid(values)
  }
  const itemDistrict = useDistrict(pvid)

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const newForm = () => {
    setOpen(true)
  }
  return (
    <div id='content' className='app-content'>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
        <li className="breadcrumb-item"><a href="javascript:;" onClick={newForm}>ເພີ່ມຂໍ້ມູນ</a></li>
        <li className="breadcrumb-item active">ຂໍ້ມູນຫ້ອງ</li>
      </ol>
      <h1 className="page-header">Dropzone <small>header small text goes here...</small></h1>




      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-gorup mb-2">
            <label htmlFor="" className="form-label">ແຂວງ</label>
            <SelectPicker data={itemPorvince} onChange={(e) => showDistrict(e)} placeholder='ເລືອກແຂວງ' block />
          </div>
          <div className="form-gorup mb-2">
            <label htmlFor="" className="form-label">ເມືອງ</label>
            <SelectPicker data={itemDistrict} placeholder='ເລືອກເມືອງ' block />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Rooms
