import React from 'react';
import LazyLoad from 'react-lazyload';

import StyledDjprogramList, { List, ListItem, ImgWrapper, Desc } from '../RecommentList/style';

interface DjprogramProps {
  DjList: Data.DjprogramListItem[];
}

function DjprogramList({ DjList }: DjprogramProps) {
  return (
    <StyledDjprogramList>
      <h1>推荐电台</h1>
      <List>
        {DjList.slice(0, 3).map((item) => {
          return (
            <ListItem key={item.id}>
              <ImgWrapper>
                <LazyLoad placeholder={<img width="100%" height="100%" src={require('../RecommentList/music.png')} alt="music" />}>
                  <img src={item.picUrl + '?param=300x300'} width="100%" height="100%" alt="music" />
                </LazyLoad>
              </ImgWrapper>
              <Desc>{item.name}</Desc>
            </ListItem>
          )
        })}
      </List>
      <h1>推荐</h1>
    </StyledDjprogramList>
  );
}

export default React.memo(DjprogramList);
