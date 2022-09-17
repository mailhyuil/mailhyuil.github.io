import Blog from '../components/Blog';
import Movie from '../components/Movie';
import Home from '../components/Home';
import About from '../components/About';
import Donot from '../components/Donot';
import Face from '../components/Face';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Main = () => {
    const [blog, setBlog] = useState("");

    const categories = new Set();
    const getAllMDFile = () => {
        return require.context('/public/posts', true, /\.md$/).keys()
    }

    const getMDFilesByCategory = (cat) => {
        const list = [];
        getAllMDFile().filter((e) => {
            return cat === e.split('/')[1];
        }).map((e) => list.push((e.split('/')[2] || '').split(".")[0]))
        return list;
    }

    getAllMDFile().map(text => {
        return text.split('/')[1]
    }).map((e) => categories.add(e))

    const [navIndex, setNavIndex] = useState("home");

    const menuList = {
        home: <Home />,
        blog: blog,
        about: <About />,
        movie: <Movie />,
        donot: <Donot />,
    }

    const blog_category = useRef([]);
    const nav_ul = useRef();
    const onClickBlog = (event) => {
        if (event.target.classList.contains('blog'))
            blog_category.current.map((e) => { e.classList.toggle('hidden') })
    }

    const onClickBlogCategory = (event, e) => {
        if (event.target.classList.contains('blog-category')) {
            Object.keys(event.target.childNodes)
                .map(item => event.target.childNodes[item])
                .map((e) => { e.classList?.toggle('hidden') })
        }
    }
    return (
        <div className="flex w-full h-full">
            <div className="h-full flex flex-1 lg:flex-row flex-col bg-slate-100">
                <nav className="lg:h-full overflow-y-auto scrollbar-hide font-primary">
                    <div className="flex justify-center p-3">
                        <Face />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-12 h-12 lg:hidden absolute left-3 top-1"
                            onClick={() => { nav_ul.current.classList.toggle("hidden") }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <ul className="nav-ul p-3 cursor-pointer lg:block hidden"
                        ref={nav_ul}>
                        <motion.li initial={{ x: -400 }} animate={{ x: 0 }} className="mb-4 mt-4 font-black text-gray-800"
                            onClick={() => { setNavIndex("home"); nav_ul.current.classList.toggle("hidden"); }}>Home</motion.li>

                        <motion.ul className="blog mb-4 font-black text-gray-800"
                            initial={{ x: -400 }} animate={{ x: 0 }}
                            onClick={(e) => { onClickBlog(e, blog_category) }}>
                            Blog
                            {Array.from(categories).map((e, index) => {
                                return <ul className="blog-category font-semibold hidden border-b border-slate-400 border-dashed text-gray-800 hover:text-pink-500 transition-all ease-in"
                                    key={index}
                                    ref={el => blog_category.current[index] = el}
                                    onClick={(event) => { onClickBlogCategory(event, e) }}>
                                    {e}
                                    {getMDFilesByCategory(e).map((md, index) => {

                                        return <li className="blog-list hidden text-sm font-light text-gray-700 hover:bg-gray-900 hover:text-white transition-all ease-in duration-200"
                                            key={index}
                                            onClick={() => {
                                                setNavIndex("blog");
                                                setBlog(<Blog fileName={md} />)
                                                nav_ul.current.classList.toggle("hidden");
                                            }}>{md}</li>
                                    })}
                                </ul>;
                            })}
                        </motion.ul>

                        <motion.li initial={{ x: -400 }} animate={{ x: 0 }} className="mb-4 font-black text-gray-800" onClick={() => { setNavIndex("about"); nav_ul.current.classList.toggle("hidden"); }}>About</motion.li>
                        <motion.li initial={{ x: -400 }} animate={{ x: 0 }} className="mb-4 font-black text-gray-800" onClick={() => { setNavIndex("movie"); nav_ul.current.classList.toggle("hidden"); }}>Movie</motion.li>
                        <motion.li initial={{ x: -400 }} animate={{ x: 0 }} className="mb-4 font-black text-red-500" onClick={() => { setNavIndex("donot"); nav_ul.current.classList.toggle("hidden"); }}>DO NOT CLICK ME!</motion.li>
                    </ul>
                </nav>
                <motion.main className="flex-1 overflow-scroll scrollbar-hide">
                    {menuList[navIndex]}
                </motion.main>
            </div>
            <footer className="text-white/80 p-4 fixed right-4 bottom-4 flex flex-col items-end">
                <p className="lg:text-lg text-sm">This blog is built with react.js by <span className="bg-pink-500/50 p-0.5">Yoo Sangbaek</span></p>
                <p className="lg:text-lg text-sm">copyright &copy; mailhyuil@gmail.com </p>
            </footer>
        </div >
    );
}

export default Main;