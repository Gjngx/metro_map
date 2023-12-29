import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const setParams = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const login = async (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "username": user.username,
      "password": user.password
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", requestOptions);

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("roles", result.roles);
        window.location.href = '/admin';
      } else {
        throw Error(response.status);
      }
    } catch (error) {
      console.log('error', error);
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  }
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
          <form>
            <h3>Đăng nhập</h3>
  
            <div className="mb-3">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Nhập tên đăng nhập"
                onChange={setParams}
              />
            </div>
  
            <div className="mb-3">
              <label>Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Nhập mật khẩu"
                onChange={setParams}
              />
            </div>
  
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Ghi nhớ mật khẩu
                </label>
              </div>
            </div>
  
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={login}>
                Đăng nhập
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="/">Quên mật khẩu?</a>
            </p>
          </form>
          </div>
        </div>
    )
  }
  export default Login;