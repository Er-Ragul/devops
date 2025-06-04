import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse from 'html-react-parser';
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

function Blog(){

    const { blog } = useParams();
    let [valid, setValid] = useState(false)
    let [navbar, setNavbar] = useState(false)
    let [content, setContent] = useState([])

    useEffect(() => {
        fetch('/blogs.json')
        .then((response) => response.json())
        .then((json) => {
            json.blogs.map((post) => {
                if(post.hasOwnProperty(blog)){
                    setContent(post[blog])
                    setValid(true)
                }
            })
        });

    }, []);

    if(valid){
        return(
            <div>
                <nav className="navbar p-3" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            <h1 className="title poppins-bold has-text-black">Ragul's Blog</h1>
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
                <div className="section is-medium">
                    {
                        content.map((post, index) => {
                            if(post.hasOwnProperty('title')){
                                return(
                                    <h1 className="title poppins-extrabold has-text-black" key={index}>{post.title}</h1>
                                )
                            }
                            if(post.hasOwnProperty('summary')){
                                return(
                                    <p className="poppins-regular has-text-black" key={index}>{parse(post.summary)}</p>
                                )
                            }
                            if(post.hasOwnProperty('subtitle')){
                                return(
                                    <h1 className="title poppins-semibold has-text-black mt-6" key={index}>{post.subtitle}</h1>
                                )
                            }
                            if(post.hasOwnProperty('paragraph')){
                                return(
                                    <p className="poppins-regular has-text-black mt-4" key={index}>{parse(post.paragraph)}</p>
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
        )
    }
    else{
        return(
            <section className="hero is-fullheight is-flex is-justify-content-center is-align-items-center">
                <p className="title poppins-semibold has-text-centered">404 Page Not Found !</p>
                <button className="button is-warning" onClick={()=>window.location.href="/"}>Back To Home</button>
            </section>
        )
    }
}

export default Blog