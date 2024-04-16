// import "src/assets/japanFlag.jpg"
const Navigation = () => {
  return (
    <div>
    <nav className='flex flex-row  items-center justify-between m-w-1200 max-h-72 h-px-72'>
    <div className=''>
      <img src="src/assets/japanLogo.jpg" alt="" className='w-10 h-8' />
    </div>
    <ul className='flex flex-row space-x-8'>
     <li> Menu</li>
     <li> Location</li>
     <li> About</li>
     <li> Contact</li>
    </ul>
    <button  className='px-4 py-2 bg-red-600 text-white rounded-md text-sm'>Log in</button>
  </nav></div>
  )
}

export default Navigation