import React from 'react'
import Navbar from './Navbar'

const DeleteAlbum = () => {
  return (
    <div>
        <Navbar/>
         <center><h2>DELETE ALBUM</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">album id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteAlbum