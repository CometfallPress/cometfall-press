import {useState} from 'react'

function ScrollContext() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sdir, setSdir] = useState(true)

    const handleScroll = (e) => {
        const { scrollTop } = e.target;
        setScrollPosition(scrollTop);
        if(scrollPosition - scrollTop < -2) {
            setSdir(false)
        }
        else if (scrollPosition - scrollTop > 2) {
            setSdir(true)
        }
    };

    return { scrollPosition, sdir, handleScroll }
}

export default ScrollContext;