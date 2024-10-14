import React from 'react'

export default function Pagination() {
  return (
    <div className='flex items-center justify-between my-2 md:my-4 lg:my-6 w-[90%] mx-auto'>
      {/* LEFT */}
      <div className='font-medium'>Showing
        <select name="rows" id="rows" className='border-2 border-[#ddd] rounded-md p-2 mx-2'>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        rows per page</div>

      {/* RIGHT */}
      <div className='font-medium'>Page 
        <select name="page" id="page" className='border-2 border-[#ddd] rounded-md p-2 mx-2'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        of 3
      </div>
    </div>
  )
}
