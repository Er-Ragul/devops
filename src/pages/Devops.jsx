import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Devops(){

    const { page } = useParams();
    let [navbar, setNavbar] = useState(false)
    let [valid, setValid] = useState(false)
    let [content, setContent] = useState([])

    useEffect(() => {
        fetch('/json/devops.json')
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
                                    <input className="input poppins-regular" type="text" placeholder="Find a blog" />
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
                    <section className="section is-medium">
                        <div className="columns is-flex is-justify-content-center">
                            <div className="column is-10-desktop is-12-tablet is-12-mobile">
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
                                                    <img src={`/${post.image}`} width={post.size}/>
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
                    </section>:                    
                    <section className="section is-medium">
                        <div className="columns">
                            <div className="columns mt-4">
                                <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                    <img src={'/images/devops.png'} width={200} style={{ borderRadius: 14 }}/>
                                </div>
                                <div className="column is-flex is-flex-direction-column ">
                                    <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">Introduction: CI/CD Pipeline Setup Using Azure DevOps</p>
                                    <p className="mt-4 has-text-black poppins-regular">The goal is to build a robust and scalable CI/CD pipeline that can automate the build, test, and deployment of applications on on-prem servers using Azure DevOps. Once we've proven this setup works in an on-premises environment, we will extend the same architecture to Azure Cloud, highlighting how easily DevOps practices can be scaled and migrated.</p>
                                    <div className="buttons mt-5">
                                        <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/introduction"}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="columns">
                            <div className="columns mt-4">
                                <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                    <img src={'/images/vmware.png'} width={300} style={{ borderRadius: 14 }}/>
                                </div>
                                <div className="column is-flex is-flex-direction-column ">
                                    <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">Environment (On-Prem Setup): CI/CD Pipeline Setup Using Azure DevOps</p>
                                    <p className="mt-4 has-text-black poppins-regular">To achieve a fully automated application deployment in an <b>on-premise</b> environment using a <b>CI/CD pipeline powered by Azure DevOps</b>, the first step is to set up a reliable and scalable <b>local environment</b>. In this blog post, I’ll walk you through how I configured my setup to support this pipeline. This allows for a seamless DevOps experience—<b>without relying on cloud-hosted infrastructure</b> for core pipeline execution.</p>
                                    <div className="buttons mt-5">
                                        <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/environment"}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="columns">
                            <div className="columns mt-4">
                                <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                    <img src={'/images/registry.png'} width={300} style={{ borderRadius: 14 }}/>
                                </div>
                                <div className="column is-flex is-flex-direction-column ">
                                    <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">Agent Server Activation for On-Prem Automated Application Deployment</p>
                                    <p className="mt-4 has-text-black poppins-regular">In this post, I'll walk you through how I set up the agent server 🖥️. We'll begin with the installation of Docker 🐳 and the Azure DevOps pipeline agent ⚙️. These installations are fairly straightforward, so I’ll simply include the official documentation links below for your reference 📄🔗.</p>
                                    <div className="buttons mt-5">
                                        <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/activation"}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="columns">
                            <div className="columns mt-4">
                                <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                    <img src={'/images/pipeline.png'} width={400} style={{ borderRadius: 14 }}/>
                                </div>
                                <div className="column is-flex is-flex-direction-column ">
                                    <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">Automated React Application Building: CI/CD Pipeline Setup Using Azure DevOps</p>
                                    <p className="mt-4 has-text-black poppins-regular">👋 In our previous blog, we walked through how to set up an agent server to run an Azure DevOps CI/CD pipeline. If you haven't checked it out yet, we recommend giving it a read first! 🧑‍💻. Now that your agent server is all set, let’s take it to the next level 🎯—automating the build process for a React application every time you push code to your GitHub repository. Yes, you heard that right! Every commit to the main branch will trigger a build pipeline in Azure DevOps. 🔁⚙️</p>
                                    <div className="buttons mt-5">
                                        <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/build"}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="columns">
                            <div className="columns mt-4">
                                <div className="column is-3-desktop is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                    <img src={'/images/release.png'} width={400} style={{ borderRadius: 14 }}/>
                                </div>
                                <div className="column is-flex is-flex-direction-column ">
                                    <p className="is-size-5 has-text-weight-bold has-text-black poppins-semibold">🚀 Building Docker Image & Pushing to Local Docker Registry: CI/CD Pipeline Setup Using Azure DevOps 🐳</p>
                                    <p className="mt-4 has-text-black poppins-regular">In this blog, we’ll walk through setting up a CI/CD release pipeline in Azure DevOps to build a Docker image and push it to a local Docker registry. This is a crucial part of modern DevOps workflows, especially when you're deploying apps within private environments.</p>
                                    <div className="buttons mt-5">
                                        <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/release"}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </section>
        }
        </>
    )
}

export default Devops;