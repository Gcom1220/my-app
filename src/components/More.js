import React from 'react'

const More = () => {

    function loadMoreHandler (){
        console.log('more')
    }

  return (
    <button onClick={loadMoreHandler} className="hover:text-slate-400 hover:scale-105 transition ease-in-out delay-300 cursor-pointer font-bold place-items-center p-4 items-center bg-transparent shadow-sm shadow-neutral-900 rounded-md">Load More...</button>
  )
}

export default More