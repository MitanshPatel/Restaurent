import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import '../index.css'
import cardcss from '../astyles/Card.module.css'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState([])   //array is sent from backend (array: [], object: {})
  const [item, setItem] = useState([])

  const loadData = async () => {
    let res = await fetch('http://localhost:5000/api/food', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res = await res.json();
    setItem(res[0]);
    setCategory(res[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  const searchIt = (e)=>{
    setSearch(e.target.value);
  }

  return (
    <div>
      <div><Navbar /></div>
      <div><Title /></div>
      <div><Carousel /></div>
      <form className="d-flex search">
        <input value={search} onChange={searchIt} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='container'>
        {
          category !== [] ? category.map((data) => {
            return (
              <div className='row'>
                <div key={data._id} className={cardcss.head}><h1>{data.CategoryName}</h1></div>
                <hr />
                {
                  item !== [] ? item.filter((item)=> (item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className= {cardcss.cardo}>
                        <Card 
                          foodName = {filterItems.name}
                          options = {filterItems.options[0]}
                          imgsrc = {filterItems.img}
                          desc = {filterItems.description}
                        />
                      </div>
                    )
                  })
                    
                   : ""
                }
              </div>
            )
          }) : ""
        }
      </div>
      <div className='helpfooter'></div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
