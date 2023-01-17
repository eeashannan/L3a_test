/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const RightSidebar = ({ openClass }) => {
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
                                            <span onClick={() => handleToggle(1)} className="menu-expand">
                                                <i className="fi-rr-angle-small-down"></i></span>
                                            <Link href="/"><a className="active">Home</a></Link>
                                           
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/advertisers"><a>Advertisers</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/publishers"><a>Publishers</a></Link>
                                           
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/#"><a>Pages</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-contact"><a>Contact</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-signup"><a>Sign Up</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-login"><a>Log In</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-reset"><a>Reset Password</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/404"><a>Error 404</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/blog-1"><a>Blog</a></Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/blog-1"><a className="closer">Blog 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-2"><a className="closer">Blog 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>

                                                    <Link href="/blog-single"><a>Blog Single</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <Link href="/page-contact"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Boosted Shots</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Collections</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-login"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2023 © l3A - Protocol<br />Designed
                                by
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default RightSidebar;