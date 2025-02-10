// import React from 'react'
import { SearchIcon } from 'lucide-react';

function SearchNav() {
  return (
    <div>
        <form className='flex rounded-full bg-gray-100 ml-3 fixed z-50 mt-2'>
           <a href=""> <SearchIcon   className='size-8 mt-1'/></a>
            <input type="text"  placeholder=' Products:' className='pl-2 w-32 h-10 rounded-full'/>
        </form>
    </div>
  )
}

export default SearchNav ;