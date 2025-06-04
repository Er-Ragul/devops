import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Devops(){

    const { page } = useParams();
    let [navbar, setNavbar] = useState(false)
    let [valid, setValid] = useState(false)
    let [content, setContent] = useState([])

    useEffect(() => {
        fetch('/devops.json')
        .then((response) => response.json())
        .then((json) => {
            json.devops.map((post) => {
                if(post.hasOwnProperty(page)){
                    setContent(post[page])
                    setValid(true)
                }
            })
        });
    }, []);


    return(
        <>
            <nav className="navbar p-3" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <h1 className="title poppins-bold has-text-black">Azure DevOps</h1>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setNavbar(!navbar)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${navbar ? 'is-active' : null}`}>
                    <div className="navbar-end">
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="/" onClick={() => setNavbar(!navbar)}>
                            Home
                        </a>
                        <div className="navbar-item">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Find a blog" />
                                </div>
                                <div className="control">
                                    <button className="button poppins-regular">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {
                valid ?
                    <>
                        <Helmet>
                            <title>Azure DevOps</title>
                            <meta property="og:image" content="/devops.png" />
                            <meta name="description" content="🚀 On-Prem Automated Application Deployment: CI/CD Pipeline Setup Using Azure DevOps – A Proof of Concept" />
                        </Helmet>
                        <section className="section is-medium">
                            <div className="columns is-flex is-justify-content-center">
                                <div className="column is-10-desktop">
                                    {
                                        content.map((post, index) => {
                                            if(post.hasOwnProperty('title')){
                                                return(
                                                    <h1 className="title poppins-extrabold has-text-black" key={index}>{post.title}</h1>
                                                )
                                            }
                                            if(post.hasOwnProperty('meta')){
                                                return(
                                                    <h1 className="poppins-regular" key={index}>{post.meta}</h1>
                                                )
                                            }
                                            if(post.hasOwnProperty('summary')){
                                                return(
                                                    <p className="poppins-regular has-text-black mt-4" key={index}>{parse(post.summary)}</p>
                                                )
                                            }
                                            if(post.hasOwnProperty('image')){
                                                return(
                                                    <div className="my-6 has-text-centered" key={index}>
                                                        <img src={`/${post.image}`} width={400}/>
                                                    </div>
                                                )
                                            }
                                            if(post.hasOwnProperty('subtitle')){
                                                return(
                                                    <h1 className="title poppins-semibold has-text-black mt-6" key={index}>{post.subtitle}</h1>
                                                )
                                            }
                                            if(post.hasOwnProperty('content')){
                                                return(
                                                    <p className="poppins-regular has-text-black mt-4" key={index}>{parse(post.content)}</p>
                                                )
                                            }
                                            if(post.hasOwnProperty('subheading')){
                                                return(
                                                    <p className="poppins-regular has-text-black mt-5" key={index}><b>{post.subheading}</b></p>
                                                )
                                            }
                                            if(post.hasOwnProperty('list')){
                                                return(
                                                    <div className="content mt-4" key={index}>
                                                        <ul>
                                                            {
                                                                post.list.map((value, subIndex) => {
                                                                    return(
                                                                        <li className="poppins-regular has-text-black" key={subIndex}>{parse(value)}</li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                            if(post.hasOwnProperty('code')){
                                                return(
                                                    <div className="mt-3" key={index}>
                                                        <SyntaxHighlighter language="javascript" style={anOldHope}>
                                                            {post.code}
                                                        </SyntaxHighlighter>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    </>:
                    <>
                        <section className="section is-medium">
                            <div className="columns">
                                <div className="columns mt-4">
                                    <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                        <img src={'/devops.png'} width={200} style={{ borderRadius: 14 }}/>
                                    </div>
                                    <div className="column is-flex is-flex-direction-column ">
                                        <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">Introduction: CI/CD Pipeline Setup Using Azure DevOps</p>
                                        <p className="mt-4 has-text-black poppins-regular">The goal is to build a robust and scalable CI/CD pipeline that can automate the build, test, and deployment of applications on on-prem servers using Azure DevOps. Once we've proven this setup works in an on-premises environment, we will extend the same architecture to Azure Cloud, highlighting how easily DevOps practices can be scaled and migrated.</p>
                                        <div className="buttons mt-5">
                                            <button className="button has-text-black poppins-regular" onClick={() => window.location.href="https://github.com/Er-Ragul/devops"}>GET SOURCE CODE</button>
                                            <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/intro"}>READ DOCS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </section>
                    </>
        }
        </>
    )
}

export default Devops;