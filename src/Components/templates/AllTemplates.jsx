import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Gallery from './Gallery';
import './AllTemplates.css'
function Alltemplates() {

  const [templates, setTemplates] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/templates');
        console.log(response.data)
        setTemplates(response.data);
      }
      catch (err) {
        console.log(err)
      }
    };
    fetchData();

  }, [])


  return (
    <div className='container'>
      <button className='btn btn-primary create'>Create Template</button>
     { templates && <Gallery templates={templates} templatesPerPage={80} totaltemplates={templates.length}>

      </Gallery>
}
    </div>
  )
}

export default Alltemplates