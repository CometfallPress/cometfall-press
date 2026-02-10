import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar.jsx'
import { useState, useEffect, use} from 'react'
import Footer from './footer.jsx'

function Layout() {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sdir, setSdir] = useState(true)

    const handleScroll = (e) => {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		setScrollPosition(scrollTop);
        if(scrollPosition - scrollTop < -2)
        {
            setSdir(false)
        }
        else if (scrollPosition - scrollTop > 2) {
            setSdir(true)
        }
	};

  return (
      <>
          <div className="w-full h-full fixed left-0 top-0 overflow-y-scroll overflow-x-clip scroll-smooth" onScroll={handleScroll}>
                <Navbar up={sdir}/>
                <div className="flex flex-col w-full h-full origin-[50%_0] scale-90">
                    <Outlet className='overflow-x-clip'/>
                    <Footer />
                </div>
          </div>
      </>
  )
}

export default Layout