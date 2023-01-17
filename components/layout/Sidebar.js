/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <Link href="/"><a className="active">About</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                           
                                            <Link href="/"><a>Products</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                           
                                            <Link href="/"><a>Technology</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/"><a>Infrastructure</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/"><a>Transparency and Governance</a></Link>
                                            
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                           
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © l3a Protocol <br />
                               </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;