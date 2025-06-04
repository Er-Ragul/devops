import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse from 'html-react-parser';
import React, { useState, useEffect } from "react"

function Maker(){

    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    let [post, setPost] = useState('')

    let [content, setContent] = useState([
        {title: "Let's get started...!"}
    ])

    function handleChange(type, value, index, subIndex){
        let newContent = [...content]

        if(type == 'title'){
            newContent[index] = {title: value}
            setContent(newContent)
        }

        if(type == 'summary'){
            newContent[index] = {summary: value}
            setContent(newContent)
        }

        if(type == 'subtitle'){
            newContent[index] = {subtitle: value}
            setContent(newContent)
        }

        if(type == 'paragraph'){
            value = value.replace(/\*\*\*(.*?)\*\*\*/g, "<span className='poppins-light' style='background-color: #1C1D21; color: white; padding: 0 5px;'>$1</span>");
            newContent[index] = {paragraph: value}
            setContent(newContent)
        }

        if(type == 'subheading'){
            newContent[index] = {subheading: value}
            setContent(newContent)
        }

        if(type == 'list'){
            value = value.replace(/\*\*\*(.*?)\*\*\*/g, "<span className='poppins-light' style='background-color: #1C1D21; color: white; padding: 0 5px;'>$1</span>");
            let newList = newContent[index]['list']
            newList[subIndex] = value
            newContent[index] = {list: newList}
            setContent(newContent)
        }

        if(type == 'code'){
            newContent[index] = {code: value}
            setContent(newContent)
        }
    }

    function handleContextMenu(e){
        e.preventDefault();
        setMenuPosition({ x: e.pageX, y: e.pageY });
        setMenuVisible(!menuVisible);
    }

    function updateList(index){
        let newList = [...content]
        newList[index] = {list: [...newList[index]['list'], 'New List']}
        setContent(newList)
    }

    function deleteContent(index){
        let newContent = [...content]
        newContent.splice(index, 1)
        setContent(newContent)
    }

    function deleteList(index, subIndex){
        let newList = [...content]
        let subList = newList[index]['list']
        subList.splice(subIndex, 1)
        newList[index] = {list: [...subList]}
        setContent(newList)
    }

    function publishPost(){
        fetch(`http://192.168.31.217:5000/blogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                [post]: content
            })
        })
        .then(res => res.json())
        .then(data => console.log('Created:', data))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        const handleLeftClick = (event) => {
            if (event.button === 2) {
                setMenuVisible(!menuVisible)
            }
        };

        document.addEventListener('click', handleLeftClick);
        return () => {
            document.removeEventListener('click', handleLeftClick);
        };
    }, []);

    return(
        <section className="section is-medium" onContextMenu={handleContextMenu}>
            <div>
                {
                    content.map((post, index) => {
                        if(post.hasOwnProperty('title')){
                            return(
                                <div key={index}>
                                    <span className="title poppins-extrabold has-text-black" contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('title', e.target.innerText, index, 0)}>{post.title}</span>
                                    <button className='delete ml-5' onClick={() => deleteContent(index)}></button>
                                </div>    
                            )
                        }
                        if(post.hasOwnProperty('summary')){
                            return(
                                <div className="mt-3" key={index}>
                                    <span className="poppins-regular has-text-black" contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('summary', e.target.innerText, index, 0)}>{post.summary}</span>
                                    <button className='delete ml-5' onClick={() => deleteContent(index)}></button>
                                </div>
                            )
                        }
                        if(post.hasOwnProperty('subtitle')){
                            return(
                                <div className="mt-3" key={index}>
                                    <span className="title poppins-semibold has-text-black mt-6" contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('subtitle', e.target.innerText, index, 0)}>{post.subtitle}</span>
                                    <button className='delete ml-5' onClick={() => deleteContent(index)}></button>
                                </div>
                            )
                        }
                        if(post.hasOwnProperty('paragraph')){
                            return(
                                <div className="mt-3" key={index}>
                                    <span className="poppins-regular has-text-black mt-4" contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('paragraph', e.target.innerText, index, 0)}>{parse(post.paragraph)}</span>
                                    <button className='delete ml-5' onClick={() => deleteContent(index)}></button>
                                </div>
                            )
                        }
                        if(post.hasOwnProperty('subheading')){
                            return(
                                <div className="mt-3" key={index}>
                                    <span className="poppins-regular has-text-black mt-5" contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('subheading', e.target.innerText, index, 0)}><b>{post.subheading}</b></span>
                                    <button className='delete ml-5' onClick={() => deleteContent(index)}></button>
                                </div>
                            )
                        }
                        if(post.hasOwnProperty('list')){
                            return(
                                <div className="content mt-4" key={index}>
                                    <button className='delete mb-2' onClick={() => deleteContent(index)}></button>
                                    <ul>
                                        {
                                            post.list.map((value, subIndex) => {
                                                return(
                                                    <li className="poppins-regular has-text-black" key={subIndex}>
                                                        <span contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('list', e.target.innerText, index, subIndex)}>{parse(value)}</span>
                                                        <button className='delete ml-5' onClick={() => deleteList(index, subIndex)}></button>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="buttons">
                                        <button className="button is-small" onClick={() =>  updateList(index)}>Add List</button>
                                    </div>
                                </div>
                            )
                        }
                        if(post.hasOwnProperty('code')){
                            return(
                                <div className="mt-3" key={index}>
                                    <button className='delete mb-3' onClick={() => deleteContent(index)}></button>
                                    <SyntaxHighlighter language="javascript" style={anOldHope} contentEditable suppressContentEditableWarning onBlur={(e) => handleChange('code', e.target.innerText, index, 0)}>
                                        {post.code}
                                    </SyntaxHighlighter>
                                </div>
                            )
                        }
                    })
                }
                
                {menuVisible && (
                    <ul
                        style={{
                            position: 'absolute',
                            top: menuPosition.y,
                            left: menuPosition.x,
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
                            listStyle: 'none',
                            padding: '10px',
                            margin: 0,
                            zIndex: 1000,
                        }}>
                        <li onClick={() => setContent(prev => [...prev, {title: 'Title'}])}>Title</li>
                        <li onClick={() => setContent(prev => [...prev, {summary: 'Summary'}])}>Summary</li>
                        <li onClick={() => setContent(prev => [...prev, {subtitle: 'Subtitle'}])}>Subtitle</li>
                        <li onClick={() => setContent(prev => [...prev, {paragraph: 'Paragraph'}])}>Paragraph</li>
                        <li onClick={() => setContent(prev => [...prev, {subheading: 'Subheading'}])}>Subheading</li>
                        <li onClick={() => setContent(prev => [...prev, {list: ['List']}])}>List</li>
                        <li onClick={() => setContent(prev => [...prev, {code: 'Code'}])}>Code</li>
                    </ul>
                )}
            </div>
            <div className="field has-addons mt-6">
                <div className="control">
                    <input className="input" type="text" placeholder="Post Name" onChange={(e) => setPost(e.target.value)}/>
                </div>
                <div className="control">
                    <button className="button is-dark" onClick={publishPost}>Save & Publish</button>
                </div>
            </div>
        </section>
    )
}

export default Maker