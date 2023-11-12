import React, {useState, useRef, useEffect} from 'react'
import {useGlobalContext} from "./context";

const Submenu = () => {
    const {isSubmenuOpen, location, page: {page, links}, columns, setColumns} = useGlobalContext();
    const container = useRef(null);

    useEffect(() => {
        if(links.length === 3) {
            setColumns('col-3')
        } else if (links.length > 3) {
            setColumns('col-4')
        }
        const submenu = container.current;
        const {center, bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [location, links])

    return (
        <aside
            ref={container}
            className={`submenu ${isSubmenuOpen ? 'show' : ''}`}
        >
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links.map(({label, icon, url}, index) => {
                    return (
                        <a key={index} href={url}>
                            {icon}
                            {label}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
}

export default Submenu
