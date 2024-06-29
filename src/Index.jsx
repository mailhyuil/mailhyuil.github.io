import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import List from "./components/List";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
const funnyMemoryQuotes = [
  "머릿속에 거미줄이 쳐졌나 봐... 🕸️",
  "내 머리가 지금 새털구름 같아요... ☁️",
  "기억의 배터리가 방전됐나 봐... 🔋",
  "제 머리가 순간적으로 멈췄어요... 🛑",
  "기억이 안개 속에서 길을 잃었나 봐... 🌫️",
  "저희 뇌는 잠시 쉬고 있습니다... 😴",
  "제 기억이 마치 엑스파일 같네요... 👽",
  "기억의 블랙홀에 빠진 것 같아요... 🕳️",
  "머릿속이 파일럿 모드로 전환됐어요... ✈️",
  "기억이 도망가서 아직 못 찾았어요... 🕵️",
];

const Main = () => {
  const [blog, setBlog] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const pages = {
    home: <Home />,
    blog: blog,
  };
  const markdowns = require.context("/public/posts", true, /\.md$/).keys();
  const categoryMap = markdowns.reduce((prev, cur) => {
    const category = cur.split("/")[1];
    if (!prev[category]) {
      prev[category] = [];
    }
    prev[category].push(cur);
    return prev;
  }, {});
  const categoryKeys = Object.keys(categoryMap);
  const [searchIndex, setSearchIndex] = useState(0);
  const [emit, setEmit] = useState(false);
  useEffect(() => {
    const getMarkdownsByQuery = () => {
      const res = markdowns.filter((md) => {
        const splitQuery = query.split(" ");
        const isMatchArray = splitQuery.map((e) => {
          const regex = new RegExp(e, "gi");
          const comparison = regex.test(md);
          return comparison;
        });
        return isMatchArray.every((e) => e === true);
      });
      if (query !== "") {
        setBlogList(() => [...res]);
      } else {
        setBlogList(() => []);
      }
      setSearchIndex(0);
    };

    getMarkdownsByQuery();
  }, [query, emit]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (blogList.length === 0 && e.key !== "Enter") return;
      if (blogList.length === 0 && e.key === "Enter") {
        setEmit((emit) => !emit);
      }
      if (e.key === "ArrowDown") {
        setSearchIndex((index) => (index + 1) % blogList.length);
      } else if (e.key === "ArrowUp") {
        setSearchIndex((index) => (index - 1 + blogList.length) % blogList.length);
      } else if (e.key === "Enter") {
        goToBlog(blogList[searchIndex]);
        setSearchIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [blogList, searchIndex]);
  const onQueryChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const goToBlog = (blog) => {
    setCurrentPage("blog");
    setBlog(<Blog blog={blog} />);
    setBlogList([]);
  };

  function randomPlaceholder() {
    return funnyMemoryQuotes[Math.floor(Math.random() * funnyMemoryQuotes.length)];
  }
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-1 h-full bg-white ">
        <nav className="overflow-y-auto h-full scrollbar-hide font-primary">
          <div className="flex justify-center p-3 pt-5">
            <img
              className="aspect-[128/108] w-auto cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/img/myblog_logo.webp"
              alt="logo"
              onClick={() => {
                setCurrentPage("home");
                setIsOpen(false);
              }}
            />
          </div>
          <ul className="flex-col items-start  px-4 cursor-pointer flex">
            <motion.li
              className="w-full px-4 py-3 text-2xl font-black text-gray-800 hover:text-pink-500 duration-300 ease-in-out"
              initial={{ x: -400 }}
              animate={{ x: 0 }}>
              <h2 onClick={() => setIsOpen((isOpen) => !isOpen)}>Recipes</h2>
              {isOpen &&
                categoryKeys.map((key, index) => {
                  return (
                    <List
                      key={index}
                      props={{
                        category: key,
                        blogs: categoryMap[key],
                        goToBlog,
                      }}
                    />
                  );
                })}
            </motion.li>
          </ul>
        </nav>
        <motion.main className="flex flex-col flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-2">
            <input
              autoFocus
              placeholder={randomPlaceholder()}
              className="w-full px-2 py-1 font-bold border-2 placeholder:text-sm placeholder:font-bold rounded-md border-gray-200 focus:outline-pink-500 duration-300 ease-in-out transition-colors focus:bg-pink-50"
              value={query}
              onChange={onQueryChange}
            />
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)}>
            <ul>
              {blogList.map((blog, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      goToBlog(blog);
                    }}
                    className={`
                      p-1 border-b cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out
                      ${index === searchIndex ? "bg-gray-100 " : ""}
                      `}>
                    <p
                      className={`
                        transition-all duration-300 ease-in-out text-sm font-normal text-gray-600 origin-left
                         ${index === searchIndex ? "bg-gray-100 translate-x-3 scale-110 !font-bold" : ""}
                         `}>
                      {blog}
                    </p>
                  </li>
                );
              })}
            </ul>
            {pages[currentPage]}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Main;
