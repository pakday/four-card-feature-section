import React from 'react';
import { Link } from "react-router-dom";
import './Menubar.scss';

const menuLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Four Card Feature Section",
        path: "four-card-feature-section",
    },
]

const Menubar = () => {
    return (
        <>
            <Links />
        </>
    )
}

const Links = () => {
    return (
        <>
            <nav>
                <ul>
                    {menuLinks?.map((item, i) => (
                        <li>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Menubar