import React, {useEffect} from 'react'

const useOutside =(node,toggle)=>{
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        toggle()
        // outside click
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
}

export {
    useOutside
}