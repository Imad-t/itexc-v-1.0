import React from 'react'

export const typefilter=({column})=> {
    const {filterValue,setFilter}=column
  return (
    <select
    value={filterValue||''} 
    onChange={(e)=>setFilter(e.target.value)}>
        <option value='admin'>Admin</option>
        <option value='store'>Store</option>
        <option value='wholesale'>Wholesaler</option>
        <option value='customer'>Customer</option>
    </select>
  )
}

export default typefilter