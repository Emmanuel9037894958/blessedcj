// import React from 'react'
import { SearchIcon } from 'lucide-react';

function SearchNav() {
  return (
    <div>
        <form className='flex rounded-full bg-gray-100 ml-3'>
           <a href=""> <SearchIcon   className='size-8 ml-2 mt-1'/></a>
            <input type="text"  placeholder='Search limited products:' className='pl-2 w-48 h-10 rounded-full'/>
        </form>
    </div>
  )
}

export default SearchNav ;