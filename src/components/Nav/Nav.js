import React from "react";
import logoImg from "../../components/assets/lws.svg";
import searchImg from "../../components/assets/search.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearch } from "../../redux/features/search/searchSlice";
const Nav = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearch(text));
  };
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={logoImg} alt="Learn with Sumit" />
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            {/* <!-- search --> */}
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
            <img
              className="inline h-4 cursor-pointer"
              src={searchImg}
              alt="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
