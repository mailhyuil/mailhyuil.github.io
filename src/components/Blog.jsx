import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css/markdown.css';

const importAll = (e) => e.keys().map(e);
const markdownFiles = importAll(require.context('/public/posts', true, /\.md$/))
    .sort()
    .reverse();

const Blog = ({ fileName }) => {
    const [post, setPost] = useState();

    useEffect(() => {
        const loadPost = async () => {
            const foundPost = await fetch(markdownFiles.filter((e) => {
                return e.split("/")[3].split(".")[0] === fileName;
            })).then(res => res.text())

            setPost(foundPost)
        }
        loadPost();
    }, [fileName]);

    return (
        <div className="markdown-body font-primary">
            <div className="card">
                <ReactMarkdown children={post} />
            </div>
        </div>
    );
}

export default Blog;