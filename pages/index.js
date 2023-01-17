/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import CounterUp from "../components/elements/CounterUp";

import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Home() {
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    return (
        <>
       <Layout>
      <section className="section-box mt-40">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 color-gray-900 mt-40">All-in-one<br className="d-lg-block d-none" />decentralized data<br className="d-lg-block d-none" />infrastructure.</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">Our mission is to address the information asymmetry in crypto. L3 Atom stores billions of crypto and Web3 data points, transactions, and historical records so anyone can access them without censorship. 
                                  </div>
                                <div className="mt-40">
                                <span className="tag-1 bg-6 color-green-900">Version 3 is Live!</span>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-box overflow-visible mt-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                             
                            <div className=""><img src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Power Query</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                             </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <div className=""><img src="/assets/imgs/page/about/2/icon-constant.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Opensource</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                          
                                </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          
                            <div className=""><img src="/assets/imgs/page/about/2/icon-match.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Decentralization</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                          

                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            
                            <div className=""><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Analytics</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                          
                            
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            
                            <div className=""><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Transparency</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                          
                            
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">

                            <div className=""><img src="/assets/imgs/page/about/2/icon-review.svg" alt="Agon" /></div>
                            <h3 className="text-heading-7 ">Free data feeds</h3>
                            <p className="text-body-text color-gray-500">Live & historical data</p>
                          

                            </div>
                        </div>
                    </div>
                </div>

                <section className="section-box mt-200">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="text-display-3 color-gray-900 mt-20">Our vision is to democratize data, address information<br className="d-lg-block d-none" />asymmetry at a scale.</h2>
                                <div className="text-body-lead-large2 color-gray-500 mt-40">
                                Data & information is the most valuable commodity in the world.

Without quality, reliable data all webpages, mobile apps, and the entire internet

will stop working.

 
                                  </div>
                                  <div className="text-body-lead-large2 color-gray-500 mt-20">
                                  We believe, access to reliable unedited information is a fundamental right, an aspect of a free and

democratic society, and the only way to scale crypto & web3. The Core Principles of L3Atom Protocol,

by design, has no single authority that can alter its data, how the information is distributed or controlled,

or who can see what and when. The infrastructure and entire technology stack is open-source and

governed by an open-source community.


 
                                  </div>

                                <div className="mt-20">
                                <span className="tag-1 bg-6 color-green-900">Read L3A Protocol vision </span>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-box mt-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-display-3 color-gray-900 mb-60">Real time data ingestion,<br className="d-lg-block d-none" /> cleaning & processing </h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <img className="img-responsive bdrd-16" src="assets/11.webp" alt="Agon" /></div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>

                <div className="section-box mt-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-60"><span className="text-display-7 color-green-900">~<CounterUp count={80} time={9}/>%</span>
                                            <p className="text-body-text color-gray-500 pl-40t">Wider coverage</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-60"><span className="text-display-7 color-green-900"><CounterUp count={345} time={9}/>+ M</span>
                                            <p className="text-body-text color-gray-500 pl-40">Messages per day</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-60"><span className="text-display-7 color-green-900"><CounterUp count={30} time={9}/>+ GB</span>
                                            <p className="text-body-text color-gray-500 pl-40">Data ingestion per day</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-60"><span className="text-display-7 color-green-900"><CounterUp count={500} time={9}/>+ </span>
                                            <p className="text-body-text color-gray-500 pl-40">Data types</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                

                <section className="section-box mt-200">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="text-display-3 color-gray-900 mt-20">FREE Data APIs & Products
</h2>
                                <div className="text-body-lead-large2 color-gray-500 mt-40">
                                L3 Atom stores billions of data points, transactions, and historical records on a decentralized infrastructure so anyone can access them without censorship. Users can query, combine and run analytics on data via a web-based open analytical application. Users can create, test, visualize, and deploy custom data feeds and develop data products and gain insights at scale. 
 
                                  </div>

                                <div className="mt-20">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-box">
                    
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-13  hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-7 mt-20">
                                    Live Web 3.0 data streaming service

                                    </h3>
                                    <p className="text-body-text mt-20">
                                    End users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD feed.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Get Free Api</a></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-13  hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-7 mt-20">
                                    Historical data-as-a-service

                                    </h3>
                                    <p className="text-body-text mt-20">
                                    End users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD feed.


                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Get Free Api</a></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-13  hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-7 mt-20">
                                    Easy deployable  App development


                                    </h3>
                                    <p className="text-body-text mt-20">
                                    End users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD feed.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Get Free Api</a></Link>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </section>



        
                <section className="section-box mt-200">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="text-display-3 color-gray-900 mt-20">We believe access to quality, unedited information is a fundamental right


</h2>
                                <div className="text-body-lead-large2 color-gray-500 mt-40">
                                L3 Atom stores billions of data points, transactions, and historical records on a decentralized infrastructure so anyone can access them without censorship. Users can query, combine and run analytics on data via a web-based open analytical application. Users can create, test, visualize, and deploy custom data feeds and develop data products and gain insights at scale. 

The core features of v4 are to introduce decentralization, expansion and immitibility.

 
                                  </div>

                                <div className="mt-20">
                                
                                </div>
                                <span className="tag-1 bg-6 color-green-900">View the archcture for the roadmap for L3A v4 </span>
                             
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1">
                                        <img src="/assets/33.webp" alt="Agon" /></div>
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/22.webp" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">
                                    <h1 className="text-display-3 mt-30">A small creative team excited to create beautiful things</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">With the greatest performance, expansion, and reconfigurability yet, it is a system created to let a wide range of professionals push the limits of what is possible.</p>
                                    <div className="mt-40">
                                        <Link href="/"><a className="btn btn-black shape-square icon-arrow-right-white">Enter Query App
                                        </a></Link>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-display-3 color-gray-900 mb-60">Monitor the infrastructure LIVE!</h2>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Our first-of-its-kind API can be applied to any language task, and serves millions of production requests each day. These problems in the crypto space mean there is no These problems in the crypto space mean there is no </p>       
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image mt-40">
                                    <img className="img-responsive" src="assets/44.webp" alt="Agon" />
                                    <img className="img-responsive" src="assets/55.webp" alt="Agon" />
                                    </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>


                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                              </div>
                           </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <Link href="/">
                                        <a className="text-heading-4">We can blend colors multiple ways, the most common
                                    </a>
                                   
                                    </Link>
                            
                                    <div className="grid-4-img">
                                        <Link href="/"><a><img src="/assets/66.webp" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <Link href="/">
                                        <a className="text-heading-4">Mini-Hackathon Recap
                                    </a>
                                   
                                    </Link>
                            
                                    <div className="grid-4-img">
                                        <Link href="/"><a><img src="/assets/77.webp" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <Link href="/">
                                        <a className="text-heading-4">Massive efficiency and adaptability gains by using neuromorphic computing</a>
                                    
                                    </Link>
                            
                                    <div className="grid-4-img">
                                        <Link href="/"><a><img src="/assets/66.webp" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
      </Layout>

        </>
    )
}

export default Home;