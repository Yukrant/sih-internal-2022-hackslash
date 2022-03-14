import React from 'react'
import { useState } from 'react';
import Dc from '../components/dashboardstats/Dc';

function DashBoard() {
    const [college, setcollege] = useState(true);
  return (
      college?
      <>
        <Dc/>
      </>
    :
        <div> Office DashBoard</div>
  )
}

export default DashBoard