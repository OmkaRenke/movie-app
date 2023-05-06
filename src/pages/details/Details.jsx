import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import VideosSection from "./videosSection/VideosSection";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Recommendation from "./carousels/Recommendation";
import Similar from "./carousels/Similar";
import "./style.scss";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`${mediaType}/${id}/videos`);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} />
      <VideosSection data={data} loading={loading} />
      <Recommendation mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
