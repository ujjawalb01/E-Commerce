import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='p-6 '>
      <div className="mb-6">
        <Link to="/admin" className='text-2xl font-medium'>Ujjawal</Link>
      </div>
    </div>
  )
}

export default AdminSidebar
