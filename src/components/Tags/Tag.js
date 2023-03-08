import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTag,
  removeTag,
} from "../../redux/features/tagsSelected/selectedTagsSlice";

const Tag = ({ title }) => {
  const { tags } = useSelector((state) => state.selectedTags);

  const dispatch = useDispatch();
  const index = tags.indexOf(title);

  const handleTags = (tag) => {
    if (index !== -1) {
      dispatch(removeTag(tag));
    } else {
      dispatch(addTag(tag));
    }
  };
  let style = "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  if (index !== -1) {
    style = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
  }
  return (
    <>
      <div onClick={() => handleTags(title)} className={style}>
        {title}
      </div>
    </>
  );
};

export default Tag;
