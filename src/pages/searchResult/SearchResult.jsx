import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import fetchDataFromApi from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.scss";
import MovieCard from "../../components/moviecard/MovieCard";
const SearchResult = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [pagen, setPagen] = useState(1);
  const { query } = useParams();

  useEffect(() => {
    setPagen(1);
    fetchDatainit();
  }, [query]);

  const fetchDatainit = () => {
    setLoading(true);
    fetchDataFromApi(`search/multi?query=${query}&page=${pagen}`).then(
      (res) => {
        setData(res);
        setPagen((pre) => pre + 1);
        setLoading(false);
      }
    );
  };

  const fetchnextdata = () => {
    fetchDataFromApi(`search/multi?query=${query}&page=${pagen}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPagen((pre) => pre + 1);
      }
    );
  };
  return (
    <div className="resultPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "results" : "result"
                } of  '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchnextdata}
                hasMore={pagen <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="notFound">Sorry ,results Not Found</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
