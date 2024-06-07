import React from 'react'
import Navbar from './Navbar'

const SearchAlbum = () => {
  return (
    <div>
        <Navbar/>
        <center><h2>SEARCH ALBUM</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">album id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAlbum