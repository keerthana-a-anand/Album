import React from 'react'
import Navbar from './Navbar'

const AddAlbum = () => {
  return (
    <div>
        <Navbar/>
        <center><h2>ADD ALBUM</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">userid</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">albumtitle</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">albumcategory</label> 
                <select name="" id="" className="form-control">
                    <option value="hiphop">hiphop</option>
                    <option value="sad">sad</option>
                    <option value="love">love</option>
                </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">albumid</label>
                <input type="text" className="form-control" />  
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">password</label>
               <input type="password" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">confirm password</label>
                <input type="password" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAlbum