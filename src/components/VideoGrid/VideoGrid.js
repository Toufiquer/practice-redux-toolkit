import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/features/videos/videosSlice";
import VideoItem from "./VideoItem";
const VideoGrid = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.search);
  const { tags } = useSelector((state) => state.selectedTags);

  useEffect(() => {
    dispatch(fetchVideos({ tags, searchText }));
  }, [dispatch, tags, searchText]);
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  let content = "Nothing was fond";
  if (isError && error) {
    content = <div className="col-span-12">Error {error} </div>;
  } else if (isLoading) {
    content = <div className="col-span-12">Loading</div>;
  } else if (videos?.length === 0) {
    content = <div className="col-span-12">No Videos Found</div>;
  } else if (videos.length > 0) {
    content = videos.map((video) => <VideoItem video={video} key={video.id} />);
  }
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}
            {content}
            {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
