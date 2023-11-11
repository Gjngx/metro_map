import React, { useState, useEffect } from 'react';
import TrainLineService from '../services/trainLineService';
import { useNavigate, Link, useParams } from 'react-router-dom';

function UpdateTrainLineComponent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedTrainLine, setUpdatedTrainLine] = useState({
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


  const updateTrainLine = (e) => {
    e.preventDefault();
    TrainLineService.updateTrainLine(id, updatedTrainLine)
      .then((response) => {
        console.log(response.data);
        navigate('/admin/Tuyến tàu');
      })
      .catch((error) => {
        handleError(error);
      });
  };

  useEffect(() => {
    TrainLineService.getTrainLineById(id).then((response) => {
      console.log(response.data.data)
      setUpdatedTrainLine(response.data.data)
    }).catch(error =>{
      console.log(error)
    })
  },[id])

  const handleError = (error) => {
    alert('Có lỗi xảy ra!');
    console.log(error);
  };

  return (
    <div>
      <br />
      <div className="container-addtrainline">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Cập nhật tuyến tàu {updateTrainLine.soTuyenTau}</h2>
            <div className="card-body">
              <form method="PUT">

              <div className="form-group mb-2">
                  <label className="form-label">Số tuyến tàu: </label>
                  <input
                    type="text"
                    name="soTuyenTau"
                    value={updatedTrainLine.soTuyenTau}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, soTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Tên tuyến tàu: </label>
                  <input
                    type="text"
                    name="tenTuyenTau"
                    value={updatedTrainLine.tenTuyenTau}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, tenTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Độ dài tuyến tàu: </label>
                  <input
                    type="number"
                    step="any"
                    name="doDaiTuyenTau"
                    value={updatedTrainLine.doDaiTuyenTau}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, doDaiTuyenTau: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Thời gian bắt đầu: </label>
                  <input
                    type="text"
                    name="thoiGianBatDau"
                    value={updatedTrainLine.thoiGianBatDau}
                    onChange={(e) => {
                      const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
                      if (regex.test(e.target.value) || e.target.value === '') {
                        setUpdatedTrainLine({ ...updatedTrainLine, thoiGianBatDau: e.target.value });
                      }
                    }}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Thời gian kết thúc: </label>
                  <input
                    type="text"
                    name="thoiGianKetThuc"
                    value={updatedTrainLine.thoiGianKetThuc}
                    onChange={(e) => {
                      const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
                      if (regex.test(e.target.value) || e.target.value === '') {
                        setUpdatedTrainLine({ ...updatedTrainLine, thoiGianBatDau: e.target.value });
                      }
                    }}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Giá vé: </label>
                  <input
                    type="number"
                    name="giaVe"
                    value={updatedTrainLine.giaVe}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, giaVe: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Khu vực: </label>
                  <input
                    type="text"
                    name="khuVuc"
                    value={updatedTrainLine.khuVuc}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, khuVuc: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Mô tả: </label>
                  <input
                    type="text"
                    name="moTa"
                    value={updatedTrainLine.moTa}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, moTa: e.target.value })}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Trạng thái: </label>
                  <select
                    name="trangThai"
                    value={updatedTrainLine.trangThai}
                    onChange={(e) => setUpdatedTrainLine({ ...updatedTrainLine, trangThai: e.target.value === 'true' })}
                  >
                    <option value="true">Đang hoạt động</option>
                    <option value="false">Dừng hoạt động</option>
                  </select>
                </div>

                <button
                  className="btn-addtrainline btn-success float-right margin-2"
                  onClick={updateTrainLine}
                >
                  Cập nhật
                </button>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/admin/Tuyến tàu"
                  className="btn-addtrainline btn-danger float-right margin-2"
                >
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

export default UpdateTrainLineComponent;
