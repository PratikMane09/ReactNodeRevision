import React from 'react'
import { useAuth } from '../context/auth'
import Usermenu from '../components/Usermenu';
function Userdashboard() {
  // const [auth] = useAuth();
  const auth=JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdashboard