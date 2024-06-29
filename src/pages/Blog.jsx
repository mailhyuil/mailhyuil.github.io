import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
const Blog = ({ blog }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    const loadPost = async () => {
      const path = blog.replace(".", "posts");
      const res = await fetch(path).catch((e) => {
        console.error(e);
        throw new Error("loadPost failed");
      });
      const foundPost = await res.text();
      setPost(foundPost);
    };
    loadPost();
  }, [blog]);

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
