import React, { useState } from "react";

const List = ({ props }) => {
  const { category, blogs, goToBlog } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className="text-xl font-semibold text-gray-800 transition-all ease-in border-b border-dashed blog-category border-slate-400 hover:text-pink-500">
      <h4 onClick={() => setIsOpen((isOpen) => !isOpen)}>{category}</h4>
      {isOpen && (
        <div>
          {blogs.map((item, index) => {
            return (
              <li
                className="text-sm font-light text-gray-700 transition-all duration-200 ease-in blog-list hover:bg-gray-900 hover:text-white"
                key={index}
                onClick={() => {
                  goToBlog(item);
                }}>
                {item}
              </li>
            );
          })}
        </div>
      )}
    </ul>
  );
};
export default List;
