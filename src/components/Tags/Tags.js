import React from "react";
import { useSelector } from "react-redux";
import Tag from "./Tag";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  console.log(tags, " => Line No: 6");
  return tags?.length > 0 ? (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
          {/* <!-- selected --> */}
          {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
            redux
          </div> */}
        </div>
      </section>
    </>
  ) : null;
};

export default Tags;
