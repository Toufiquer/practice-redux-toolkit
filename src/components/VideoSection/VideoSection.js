import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../../redux/features/video/videoSlice";
import Description from "./Description";
import IFrame from "./IFrame";
import RelatedVideos from "./RelatedVideos";
const VideoSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.video);
  const { link, tags } = video.video;
  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <IFrame link={link} />

              {/* <!-- video description --> */}
              <Description video={video.video} />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideos id={id} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
