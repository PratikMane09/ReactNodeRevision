import React from 'react';
import Usermenu from '../components/Usermenu';

function Orders() {
  return (
    <div>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu />
          </div>
          <div className="col-md-9">
            <h1>All Orders</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders