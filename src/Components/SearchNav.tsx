// import React from 'react'
import { SearchIcon } from 'lucide-react';

function SearchNav() {
  return (
    <div>
        <form className='flex rounded-lg bg-slate-400 ml-5'>
           <a href=""> <SearchIcon   className='size-8 ml-2 mt-1'/></a>
            <input type="text"  placeholder='Search limited products:' className='pl-2 w-50 rounded-lg h-10'/>
        </form>
    </div>
  )
}

export default SearchNav ;