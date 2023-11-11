import React, { useState } from 'react';
import TrainLineService from '../services/trainLineService';
import { useNavigate, Link } from 'react-router-dom';

function CreateTrainLineComponent() {
  const [newTrainLine, setNewTrainLine] = useState({
    soTuyenTau: '',
    tenTuyenTau: '',
    doDaiTuyenTau: '',
    thoiGianBatDau: '',
    thoiGianKetThuc: '',
    giaVe: '',
    khuVuc: '',
    moTa: '',
    trangThai: '',
  });

  const navigate = useNavigate();

  const saveTrainLine = (e) => {
    e.preventDefault();

    TrainLineService.createTrainLine(newTrainLine)
      .then((response) => {
        console.log(response.data);
        navigate('/admin/Tuyến tàu');
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleError = (error) => {
    alert('Tên tuyến tàu đã tồn tại!');
    console.log(error);
  };

  return (
    <div>
      <br />
      <div className="container-addtrainline">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Thêm tuyến tàu</h2>
            <div className="card-body">
              <form method='POST'>

                <div className="form-group mb-2">
                  <label className="form-label">Số tuyến tàu: </label>
                  <input
                    type="text"
                    name="soTuyenTau"
                    value={newTrainLine.soTuyenTau}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, soTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Tên tuyến tàu: </label>
                  <input
                    type="text"
                    name="tenTuyenTau"
                    value={newTrainLine.tenTuyenTau}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, tenTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Độ dài tuyến tàu: </label>
                  <input
                    type="number"
                    step="any"
                    name="doDaiTuyenTau"
                    value={newTrainLine.doDaiTuyenTau}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, doDaiTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Thời gian bắt đầu: </label>
                  <input
                    type="text"
                    name="thoiGianBatDau"
                    value={newTrainLine.thoiGianBatDau}
                    onChange={(e) => {
                      const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
                      if (regex.test(e.target.value) || e.target.value === '') {
                        setNewTrainLine({ ...newTrainLine, thoiGianBatDau: e.target.value });
                      }
                    }}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Thời gian kết thúc: </label>
                  <input
                    type="text"
                    name="thoiGianKetThuc"
                    value={newTrainLine.thoiGianKetThuc}
                    onChange={(e) => {
                      const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
                      if (regex.test(e.target.value) || e.target.value === '') {
                        setNewTrainLine({ ...newTrainLine, thoiGianBatDau: e.target.value });
                      }
                    }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Giá vé: </label>
                  <input
                    type="number"
                    name="giaVe"
                    value={newTrainLine.giaVe}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, giaVe: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Khu vực: </label>
                  <input
                    type="text"
                    name="khuVuc"
                    value={newTrainLine.khuVuc}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, khuVuc: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Mô tả: </label>
                  <input
                    type="text"
                    name="moTa"
                    value={newTrainLine.moTa}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, moTa: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Trạng thái: </label>
                  <select
                    name="trangThai"
                    value={newTrainLine.trangThai}
                    onChange={(e) => setNewTrainLine({ ...newTrainLine, trangThai: e.target.value === 'true' })}
                  >
                    <option value="true">Đang hoạt động</option>
                    <option value="false">Dừng hoạt động</option>
                  </select>
                </div>

                <button className="btn-addtrainline btn-success float-right margin-2" onClick={saveTrainLine}>
                  Lưu
                </button>
                <Link style={{ textDecoration: 'none' }} to="/admin/Tuyến tàu" className="btn-addtrainline btn-danger float-right margin-2">
                  Hủy
                </Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrainLineComponent;
