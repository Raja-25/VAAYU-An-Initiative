import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
function BlogModal() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:5000/api/comment', {
            username: "raajaaaa",
            blogmsg: data.get('blogmsg'),
            title: data.get('title'),
            imagelink: data.get('imagelink'),
        })
            .then((response) => {
                console.log(response.data);
                if (response.status === 201) {
                    toast.success("BlogPost has been saved")
                } else {
                    toast.error("error in saving the post");
                }
            }).catch((err) => {

                console.log(err)
            })
    }
    return (
        <>
            <div className="modal fade" id="blogPostModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-container">
                                <form className="form" onSubmit={handleSubmit}>
                                    <span className="heading">Get in touch</span>
                                    <input placeholder="title of the blog" type="text" className="input" name="title" />
                                    <input placeholder="image url" id="mail" type="text" className="input" name="imagelink" />
                                    <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="blogmsg" className="textarea" ></textarea>
                                    <div className="button-container">
                                        <button type="submit" className="send-button loginbtn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ReadMore(props) {
    return (
        <div className="modal fade" id={props.modalId} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="readmore_card">
                            <h2><span>{props.comment.title}</span></h2>
                            <div className="read_img">
                                <img src={props.comment.imagelink} alt="Blog Image" />
                            </div>
                            <p className="info">{props.comment.blogmsg}</p>
                            <div className="share">
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2.00.27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg></a>
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 a3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                </svg></a>
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg></a>
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l.008.105.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.170-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogButton() {
    return (
        <>
            <div className="col-md-8">
                <p>Be a part of our community! Feel free to share your experience</p>
                <button className="btn btn-primary loginbtn" data-bs-toggle="modal"
                    data-bs-target="#blogPostModal">Create blog</button>
            </div>
            <BlogModal />
        </>
    );
};

function Card(props) {
    const words = props.comment.blogmsg.split(' ');

    // Take the first two words and join them back into a string
    const truncatedMessage = words.slice(0, 2).join(' ');
    const trunmsg = truncatedMessage + " ...";

    // Generate a unique modal ID based on the comment index
    const modalId = `readMore-${props.index}`;

    return (
        <div>
            <div className="original_card">
                <div className="image">
                    <img src={props.comment.imagelink} alt="Blog Image" />
                </div>
                <div className="content">
                    <a href="#">
                        <span className="title">
                            {props.comment.title}
                        </span>
                    </a>
                    <p className="desc">
                        {trunmsg}
                    </p>
                    <a className="action loginbtn" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                    <ReadMore comment={props.comment} modalId={modalId} />
                </div>
            </div>
        </div>
    );
}

function Community() {
    const [comments, setComments] = useState([]); // State to store comments

    useEffect(() => {
        // Fetch comments when the component mounts
        axios.get('http://localhost:5000/api/getcomments')
            .then((response) => {
                setComments(response.data); // Set comments in state
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className='blog-vaayu-conatiner'>
            <div className='Blog_container'>
                <BlogButton />
            </div>
            <div className="container">
                <div className="card-container">
                    {/* Render multiple Card components with comment data as props */}
                    {comments.map((comment, index) => (
                        <Card key={index} comment={comment} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Community;
