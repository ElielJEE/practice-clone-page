import React, { useState, useEffect } from 'react';
import './Comments.css';
import './CommentsForm.css'
import Pagination from './Pagination';

const Comments = () => {
    const [values, setValues] = useState({
        alias: "",
        comment: ""
    })

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(6);


    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const [comment, setCommnet] = useState([])

    const errors = {
        name: "",
        com: ""
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (values.alias === "") {
            errors.name = "This Field is Required"
        } else if (values.comment === "") {
            errors.com = "This Field is Required"
        } else {
            setCommnet([
                ...comment,
                values
            ])
    
            e.currentTarget.reset();

            setValues({
                alias: "",
                comment: ""
            })
        }
    }

    useEffect(() => {
        const localData = localStorage.getItem('comments')
        if (localData) {
            setCommnet(JSON.parse(localData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comment));
    }, [comment])

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comment.slice(indexOfFirstComment, indexOfLastComment);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="comments-container">
            <div className="comment-content">
                {
                    currentComments.map((item, index) => {
                        return(
                            <div className="card" key={index}>
                                <h3>
                                    {item.alias}:
                                </h3>
                                <p>
                                    {item.comment}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="paginate">
                <Pagination 
                    commentPerPage={commentsPerPage}
                    totalComments={comment.length}
                    paginate={paginate}
                />
            </div>
            <div className="form-container">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="alias-name">
                            <input 
                                id="alias"
                                name="alias"
                                type="text"
                                placeholder="Ingresa un alias"
                                onChange={handleChange}
                                value={values.name}
                            />
                        </div>
                        <div className="comment-area">
                            <textarea
                                id="comment"
                                name="comment"
                                type="text"
                                placeholder="Ingresa un comentario"
                                onChange={handleChange}
                                value={values.name}
                            />
                        </div>
                        <button type="submit" className="btn-comment">Publicar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comments;