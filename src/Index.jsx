import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Donot from "./pages/Donot";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const Main = () => {
  const [blog, setBlog] = useState("");
  const [foundBlog, setFoundBlog] = useState([]);
  const [query, setQuery] = useState("");
  const [navIndex, setNavIndex] = useState("home");
  const blog_category = useRef([]);
  const nav_ul = useRef();
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

  const categories = new Set();

  const getAllMDFile = () => {
    return require.context("/public/posts", true, /\.md$/).keys();
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
    .map((text) => text.split("/")[1])
    .map((e) => categories.add(e));

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const menuList = {
    home: <Home />,
    blog: blog,
    about: <About />,
    movie: <Movie />,
    donot: <Donot />,
  };

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
            <img width="128" height="108" className="mt-5 hidden lg:block" src="/img/myblog_logo.webp" alt="logo" />
            <img width="96" height="41" className="lg:hidden" src="/img/myblog_logo2.webp" alt="logo" />
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
          <ul className="flex-col items-start ml-5 hidden px-4 cursor-pointer nav-ul lg:flex" ref={nav_ul}>
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

            <motion.li
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
            </motion.li>

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
        <motion.main className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">
          <div className="p-2">
            <input
              autoFocus
              placeholder="Search whatever you want to search!"
              className="border-2 rounded-md py-1 px-2 font-bold w-full "
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="flex-1">
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
            {menuList[navIndex]}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Main;
