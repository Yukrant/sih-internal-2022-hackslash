import React from 'react'
import { useParams } from 'react-router-dom'

function PublicProfileCollege() {
    const  {  college_name } = useParams();
  return (
    <div>PublicProfileCollege: {college_name}</div>
  )
}

export default PublicProfileCollege