import React, { useCallback } from 'react';
import { useMount } from 'ahooks';
import { useHistory } from 'react-router-dom';
import { forceCheck } from 'react-lazyload';

import { RecommondRoutePath } from 'constants/router';
import RecommendContainer from 'containers/RecommendContainer';
import { useListenThemeChange } from 'containers/ThemeContainer';
import Slider from 'components/Slider';
import Scroll from 'components/Scroll';
import { Loading } from 'components/Loading';

import StyledRecommend from './style';
import RecommentList from 'components/RecommentList';
import DjprogramList from 'components/DjprogramList'

interface RecommendProps {
  children?: React.ReactNode;
}

function Recommend({ children }: RecommendProps) {
  const {
    loading,
    bannerImages,
    bannerList,
    recommendList,
    djprogramList,
    getBannerList,
    getRecommendList,
    getDjprogramList
  } = RecommendContainer.useContainer();
  useListenThemeChange();
  const history = useHistory();

  const goDetail = useCallback(
    (item: Data.RecommendListItem) => {
      history.push(RecommondRoutePath.buildDetailPath(item.id));
    },
    [history],
  );

  useMount(() => {
    if (!bannerList.length) getBannerList();
    if (!recommendList.length) getRecommendList();
    if (!djprogramList.length) getDjprogramList();
  });

  return (
    <StyledRecommend>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider imgs={bannerImages} />
          <RecommentList list={recommendList} onItemClick={goDetail}/>
          <DjprogramList DjList={djprogramList}/>
        </div>
      </Scroll>

      {loading && <Loading />}
      {children}
    </StyledRecommend>
  );
}

export default React.memo(Recommend);
