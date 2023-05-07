import Blog from "../components/Blog";
import Movie from "../components/Movie";
import Home from "../components/Home";
import About from "../components/About";
import Donot from "../components/Donot";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const [blog, setBlog] = useState("");
  const [foundBlog, setFoundBlog] = useState([]);
  const [query, setQuery] = useState("");
  const categories = new Set();
  const getAllMDFile = () => {
    return require.context("/public/posts", true, /\.md$/).keys();
  };
  useEffect(() => {
    const res = getAllMDFile().filter((md) => {
      const regex = new RegExp(query, "gi");
      const comparison = regex.test(md);
      return comparison;
    });
    if (query !== "") {
      setFoundBlog([...res]);
    } else {
      setFoundBlog([]);
    }
  }, [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const getMDFilesByCategory = (cat) => {
    const list = [];
    getAllMDFile()
      .filter((e) => {
        return cat === e.split("/")[1];
      })
      .map((e) => list.push((e.split("/")[2] || "").split(".")[0]));
    return list;
  };

  getAllMDFile()
    .map((text) => {
      return text.split("/")[1];
    })
    .map((e) => categories.add(e));

  const [navIndex, setNavIndex] = useState("home");

  const menuList = {
    home: <Home />,
    blog: blog,
    about: <About />,
    movie: <Movie />,
    donot: <Donot />,
  };

  const blog_category = useRef([]);
  const nav_ul = useRef();
  const onClickBlog = (event) => {
    if (event.target.classList.contains("blog")) blog_category.current.map((e) => e.classList.toggle("hidden"));
  };

  const onClickBlogCategory = (event, e) => {
    if (event.target.classList.contains("blog-category")) {
      Object.keys(event.target.childNodes)
        .map((item) => event.target.childNodes[item])
        .map((e) => e.classList?.toggle("hidden"));
    }
  };
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-1 h-full bg-white lg:flex-row">
        <nav className="overflow-y-auto lg:h-full scrollbar-hide font-primary">
          <div className="flex justify-center p-3">
            <img className="mt-5 w-[11rem] hidden lg:block" src="/img/myblog_logo.png" alt="logo" />
            <img className="w-24 lg:hidden" src="/img/myblog_logo2.png" alt="logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute w-12 h-12 lg:hidden left-3 top-1"
              onClick={() => {
                nav_ul.current.classList.toggle("hidden");
              }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <ul className="flex-col items-center hidden px-4 cursor-pointer nav-ul lg:flex" ref={nav_ul}>
            <motion.li
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              className="mt-4 mb-4 text-2xl font-black text-gray-800"
              onClick={() => {
                setNavIndex("home");
                nav_ul.current.classList.toggle("hidden");
              }}>
              Home
            </motion.li>

            <motion.ul
              className="mb-4 text-2xl font-black text-gray-800 blog"
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              onClick={(e) => {
                onClickBlog(e, blog_category);
              }}>
              Blog
              {Array.from(categories).map((e, index) => {
                return (
                  <ul
                    className="hidden text-xl font-semibold text-gray-800 transition-all ease-in border-b border-dashed blog-category border-slate-400 hover:text-pink-500"
                    key={index}
                    ref={(el) => (blog_category.current[index] = el)}
                    onClick={(event) => {
                      onClickBlogCategory(event, e);
                    }}>
                    {e}
                    {getMDFilesByCategory(e).map((md, index) => {
                      return (
                        <li
                          className="hidden text-sm font-light text-gray-700 transition-all duration-200 ease-in blog-list hover:bg-gray-900 hover:text-white"
                          key={index}
                          onClick={() => {
                            setNavIndex("blog");
                            setBlog(<Blog fileName={md} />);
                            nav_ul.current.classList.toggle("hidden");
                            setFoundBlog([]);
                            setQuery("");
                          }}>
                          {md}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </motion.ul>

            <motion.li
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              className="mb-4 text-2xl font-black text-gray-800"
              onClick={() => {
                setNavIndex("about");
                nav_ul.current.classList.toggle("hidden");
              }}>
              About
            </motion.li>
            <motion.li
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              className="mb-4 text-2xl font-black text-gray-800"
              onClick={() => {
                setNavIndex("movie");
                nav_ul.current.classList.toggle("hidden");
              }}>
              Movie
            </motion.li>
          </ul>
        </nav>
        <motion.main className="flex-1 overflow-scroll scrollbar-hide">
          <div className="p-2">
            <input autoFocus className="border-2 rounded-md py-1 px-2 font-bold w-full " value={query} onChange={onChange} />
          </div>
          <div>
            <ul>
              {foundBlog.map((blog, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setNavIndex("blog");
                      setBlog(<Blog fileName={blog.split("/")[2].split(".")[0]} />);
                      nav_ul.current.classList.toggle("hidden");
                      setFoundBlog([]);
                    }}
                    className="cursor-pointer hover:bg-gray-100 border-b p-1 font-semibold text-sm text-gray-600">
                    {blog}
                  </li>
                );
              })}
            </ul>
          </div>
          {menuList[navIndex]}
        </motion.main>
      </div>
      <footer className="fixed flex flex-col items-end p-4 text-white/80 right-4 bottom-4">
        <p className="text-sm lg:text-lg">
          This blog is built with react.js by <span className="bg-pink-500/50 p-0.5">Yoo Sangbaek</span>
        </p>
        <a className="mt-2" href="https://github.com/mailhyuil/mailhyuil.github.io">
          <img src="https://img.shields.io/badge/source code-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="github badge" />
        </a>
      </footer>
    </div>
  );
};

export default Main;
