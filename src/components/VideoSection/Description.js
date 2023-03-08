import React from "react";
import LikeUnLike from "./LikeUnLike";

const Description = ({ video }) => {
  const { date, title, description, likes, unLikes } = video;
  return (
    <>
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div className="pb-4 flex items-center space-between border-b">
          <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on {date}
          </h2>

          {/* <!-- like/unlike --> */}
          <LikeUnLike likes={likes} unLikes={unLikes} />
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </>
  );
};

export default Description;
