import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [album,changeAlbum]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
      (response)=>
        {
          changeAlbum(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    
  return (
    <div>
        <Navbar/>
        <center><h2>DISPLAY</h2></center>
        <table class="table table-bordered border-dark" border="4" >
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      
    </tr>
  </thead>
  <tbody>
    {album.map(
        (value,index)=>
            {
                return <tr>
                <td scope="row">{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
              
              </tr>
            }
    )}
   
    
  </tbody>
</table>
    </div>
  )
}

export default View