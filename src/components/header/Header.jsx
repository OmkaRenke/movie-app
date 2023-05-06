import React, { useEffect, useState } from "react";
import "./header.scss";
import ContenttWrapper from "../contentWrapper/ContentWrapper";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lastScroll, setLastScroll] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState("top");
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if ((e.key === "Enter" && searchQuery.length > 0) || e.type === "click") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScroll && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  // const navigateHandler = (type) => {
  //   if (type === "movie") {
  //     navigate("/explore/movie");
  //   } else {
  //     navigate("/explore/tv");
  //   }
  //   setMobileMenu(!mobileMenu);
  // };

  return (
    <header className={`header ${show}`}>
      <ContenttWrapper>
        <div className="headerContent">
          <div className="logo" onClick={() => navigate("/")}>
            {/* <img src={logo} alt="" /> */} logo
          </div>
          <div className="searchBox">
            <input
              className="inputSearchBox"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <HiOutlineSearch onClick={searchQueryHandler} />
          </div>
          {/* <ul className="menuItems">
            <li className="menuItem"></li>
            <li className="menuItem" onClick={() => navigateHandler("movie")}>
              Movies
            </li>
            <li className="menuItem" onClick={() => navigateHandler("tv")}>
              TV Shows
            </li>
          </ul> */}
          {/* <div className="mobileMenuItems">
            <div onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <VscChromeClose /> : <SlMenu />}
            </div>
          </div> */}
        </div>
      </ContenttWrapper>
      {/* //mobileMenu start  */}
      {/* {mobileMenu && (
        <div className="menu">
          <div className="item" onClick={() => navigateHandler("movie")}>
            Movies
          </div>
          <div className="item" onClick={() => navigateHandler("tv")}>
            TVs
          </div>
        </div>
      )} */}
      {/* mobile menu end */}
    </header>
  );
};

export default Header;
