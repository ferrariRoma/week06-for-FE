import { memo, useRef, useState, useEffect, useCallback } from "react";
import Pagination from "../components/Pagination";
import PagenationPost from "../components/PagenationPost";

const Home = memo(({ posts, loading }) => {
  // app.js에서 props로 받아온 페이지네이션 state와 추가적인 필요 state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useRef(12);
  // const [postsPerPage, setPostsPerPage] = useState(12);

  // 페이지네이션을 위한 작업. 함수는 매번 재선언되지 않게 하기 위해서 useCallback설정.
  // 의존성 배열로 currentPage 설정. currentPage는 아래 페이지 nav에서 페이지 번호를 클릭할 시 해당 번호로 setState됨.
  const indexOfLast = currentPage * postsPerPage.current;
  const indexOfStart = indexOfLast - postsPerPage.current;
  const currentPosts = useCallback(
    (posts) => {
      let currentListIndex = 0;
      currentListIndex = posts.slice(indexOfStart, indexOfLast);
      return currentListIndex;
    },
    [currentPage]
  );

  return (
    <>
      {loading && <div> loading... </div>}
      <PagenationPost posts={currentPosts(posts)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      />
    </>
  );
});

export default Home;
