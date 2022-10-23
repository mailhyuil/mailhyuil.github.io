import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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
        <div className="mx-4 my-3 font-primary flex justify-center lg:block">
            <ReactMarkdown className="prose lg:max-w-none"
                components={{ img: ({ node, ...props }) => <img style={{ maxWidth: '50%' }}{...props} alt="" /> }}
                children={post}
            />
        </div>
    );
}

export default Blog;