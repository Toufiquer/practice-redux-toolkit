import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({ id, tags }) => {
  const relatedVideos = useSelector(
    (state) => state.relatedVideos.relatedVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);
  let content = null;
  if (relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        {content}
      </div>
    </>
  );
};

export default RelatedVideos;
