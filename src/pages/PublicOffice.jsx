import React from 'react'
import { useParams } from 'react-router-dom'

function PublicOffice() {
    const { company_name }= useParams();
  return (
    <div>PublicOffice: {company_name}</div>
  )
}

export default PublicOffice