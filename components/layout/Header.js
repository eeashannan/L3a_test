/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/">
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="" src="/assets/logo.webp" /> : <img alt="" src="/assets/logo.webp" />}

                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <Link href="/"><a className="active">About</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="/"><a>Products</a></Link>
                                            
                                        </li>
                                        <li className="has-children">
                                            <Link href="/"><a>Technology</a></Link>
                                            
                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a>Infrastructure</a></Link>
                                           
                                        </li>
                                        <li className="has-children">
                                            <Link href="/"><a>Transparency & Governance</a></Link>
                                        </li>
                                        
                                        
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white d-block d-md-none" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;