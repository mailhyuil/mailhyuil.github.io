import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
const importAll = (e) => e.keys().map(e);
const markdownFiles = importAll(require.context("/public/posts", true, /\.md$/)).sort().reverse();

const Blog = ({ fileName }) => {
  const [post, setPost] = useState();

  const loadPost = async () => {
    const res = await fetch(
      markdownFiles.filter((e) => {
        return e.split("/")[3].split(".")[0] === fileName;
      })
    );
    const foundPost = await res.text();
    setPost(foundPost);
  };

  useEffect(() => {
    loadPost();
  }, [fileName]);

  return (
    <div className="flex justify-center mx-4 my-3 font-primary lg:block">
      <ReactMarkdown
        className="prose prose-pre:p-0 prose-pre:overflow-x-auto prose-pre:rounded-none prose-pre:m-0 lg:max-w-none"
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => <img style={{ maxWidth: "50%" }} {...props} alt="markdown_image" />,
          code: (props) => {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, "")} language={match[1]} style={vscDarkPlus} />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}>
        {post}
      </ReactMarkdown>
    </div>
  );
};

export default Blog;
