import React from 'react'
import Adminmenu from '../components/Adminmenu'

function Createproduct() {
  return (
    <div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createproduct
