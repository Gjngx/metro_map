import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';
import Axios from "axios";
import { useNavigate, Link } from 'react-router-dom';


function CreateTrainComponent() {
  const navigate = useNavigate();
  const [listRoles, setListRoles] = useState([])
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    roles: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
  });

  const fetchRoles = async () => {
    const { data } = await Axios.get('http://localhost:8080/api/v1/admins/roles');
    const roles = data;
    setListRoles(roles);
    console.log(roles);
  };

  const saveUser = (e) => {
    e.preventDefault();
    if (validateForm()) {
        UserService.createUser(newUser)
      .then((response) => {
        console.log(response.data);
        navigate('/admin/Admin');
      })
      .catch((error) => {
        handleError(error);
      });
    }
  };
  useEffect(() => {
    fetchRoles();
  })

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!newUser.username) {
        newErrors.username = 'Vui lòng nhập lại tài khoản';
        valid = false;
      }
  
    if (!newUser.password) {
      newErrors.password = 'Vui lòng nhập lại mật khẩu';
      valid = false;
    }

    if (!newUser.email) {
      newErrors.email = 'Vui lòng nhập lại email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleError = (error) => {
    alert('Thêm mới thất bại!');
    console.log(error);
  };

  return (
    <div>
      <br />
      <div className="container-addtrainline">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center padding5">Thêm tài khoản</h2>
            <div className="card-body">
              <form method='POST'>

                <div className="form-group mb-2">
                  <label className="form-label">Tài khoản: </label>
                  <input
                    type="text"
                    name="username"
                    value={newUser.username}
                    onChange={(e) => {
                      setNewUser({ ...newUser, username: e.target.value });
                      setErrors({ ...errors, username: '' });
                    }}
                  />
                  {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email: </label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={(e) => {
                      setNewUser({ ...newUser, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Mật Khẩu: </label>
                  <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={(e) => {
                      setNewUser({ ...newUser, password: e.target.value });
                      setErrors({ ...errors, password: '' });
                    }}
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Roles: </label>
                  <select class="form-select" 
                          aria-label="Default select example"
                          value={newUser.roles} 
                          onChange={(e) => { setNewUser({ ...newUser, roles: e.target.value });}}>
                            {listRoles.map(role => (
                              <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                  </select>
                </div>

                <button className="btn margin2 btn-success float-right margin-2" onClick={saveUser}>
                  Lưu
                </button>
                <Link style={{ textDecoration: 'none' }} to="/admin/Admin" className="btn btn-danger float-right margin-2">
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

export default CreateTrainComponent;