import React,{useState} from 'react';

export default function MoviesList(props){

  
       const [searchItem,setSearchItem]=useState([
        { id: 1, title: "Inception", votes: 8 },
        { id: 2, title: "Interstellar", votes: 9 },
        { id: 3, title: "Tenet", votes: 6 },
        { id: 4, title: "Dunkirk", votes: 7 }
       ])
       const handleChange=(e)=>{
          setSearchItem(e.target.value)
       }
      
  
     
    return(<center>
        <h3 style={{color:'blue'}}>Movies List</h3>
        <p style={{color:'black'}}>You can search your favouite movies</p>
        <input  placeholder='search your favoirte movie' onChange={handleChange}/>
        {searchItem.map((movieitem,index)=>{
            return <li key={index}>{movieitem.id}
            {movieitem.title}
            {movieitem.votes}
            </li>
        })}

    </center>)
}