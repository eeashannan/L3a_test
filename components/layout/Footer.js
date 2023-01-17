/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/">
                                    <a>
                                        <img alt="" src="/assets/logo.webp" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
                                <Link href="/">
                                    <a className="btn btn-square">Start building </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">Our mission urges us to consider problems across multiple subject areas, both applied</div>
                            <div className="mt-20 text-body-text color-gray-600">Community & Socials</div>
                            <div className="text-body-text color-gray-600">Career & Internships</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About </h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Documentation</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career">
                                        <a>Code</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Career</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Application</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2">
                                        <a>Streaming Service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1">
                                        <a>Historical data as a service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Power Query</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Universal data collector</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Fusion</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Open Metrics</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Infrastructure</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1">
                                        <a>L3Atom v3</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Exchange Connectors</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Nodes</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Transparency</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Progress updates</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Accounting</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© L3 Protocol Official 2022</span>
                                <Link href="/">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/">
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link>
                                <Link href="/">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com">
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com">
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com">
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com">
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;