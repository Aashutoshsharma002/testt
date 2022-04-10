import './App.css';
import React, { useState } from 'react';

function App() {
  var data = [
    {
      id: 1,
      Token: 'ssasfgyashgf',
      startDate: '2019-01-01 00:00:00',
      endDate: '2019-01-02 00:00:00',
      status: 'active',
      link: 'https://www.google.com',
      Position: '1',
    }
  ];
  const [dmp, setDmp] = useState(data);
  const clickHandler = () => {
    // get value from input
    var token = document.getElementById('tokenName').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var link = document.getElementById('presale').value;
    // create new object
    var newData = {
      id: dmp.length + 1,
      Token: token,
      startDate: startDate,
      endDate: endDate,
      status: 'active',
      link: link,
      Position: dmp.length + 1,
    }
    // add new object to data
    data.push(newData);
    // set data to dmp
    setDmp(data);
  };
  // remove data handler
  const removeHandler = (id) => {
    // filter data
    var newData = data.filter(item => item.id !== id);
    // set data to dmp
    setDmp(newData);
  };
  return (
    <div className="App">
      <div className="btn btn-primary mt-5 border-5 cl1">
        {/* bold */}
        <b><h3>Active Trand</h3></b>
      </div>
      <div className="d-flex justify-content-center">
        {/* start date input */}
        <div className="col-md-2 cl-2">
          <label htmlFor="startDate">Start Date</label>
          <div className="input-group">
            <input type="datetime-local" className="form-control inclas" id="startDate" />
          </div>
        </div>
        {/* end date input */}
        <div className="col-md-2 cl-2">
          <label htmlFor="endDate">End Date</label>
          <div className="input-group">
            <input type="datetime-local" className="form-control  inclas" id="endDate" />
          </div>
        </div>
        {/*  tokenname input */}
        <div className="col-md-3 cl-2">
          <label htmlFor="tokenName">Token Name</label>
          <div className="input-group">
            <input type="text" className="form-control inclas" id="tokenName" placeholder="Token Number"/>
          </div>
        </div>
        {/* presale input */}
        <div className="col-md-2 cl-2">
          <label htmlFor="presale">Presale</label>
          <div className="input-group">
            <input type="text" className="form-control inclas" id="presale" placeholder="presale link" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary inclas" type="button" style={{backgroundColor:'#4e1980'}}
              onClick={clickHandler}
              >Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 tclas">
        {/* Table */}
        <table className="table cls-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Link</th>
              <th scope="col">Position</th>
              <th scope="col">Start Trade</th>
              <th scope="col">Finish Trade</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {dmp.map(item => (
              <tr key={item.id}>
                <td>{item.Token}</td>
                <td>{item.link}</td>
                <td>{item.Position}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                  <button className="btn btn-outline-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
