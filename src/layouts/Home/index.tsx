import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { RecommondRoutePath, SingersRoutePath, RankRoutePath, SearchRoutePath } from 'constants/router';
import Drawer from 'components/Drawer';

import StyledHome, { Top, Tab, TabItem } from './style';
import DrawerContent from './DrawerContent';
import Player from './Player';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const history = useHistory();
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    console.log(showDrawer) // dx1 
  }, [showDrawer])

  return (
    <StyledHome>
      <Drawer width={250} show={showDrawer} onClose={() => { setShowDrawer(true); }}>
        <DrawerContent
          closeDrawer={() => {
            setShowDrawer(() => { return false });
          }}
        />
      </Drawer>
      <Top>
        <span className="iconfont menu" onClick={() => setShowDrawer(() => { return true })}>
          &#xe65c;
        </span>
        <span className="title"></span>
        <span className="iconfont search" onClick={() => history.push(SearchRoutePath.Root)}>
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to={RecommondRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to={SingersRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to={RankRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      { children}
      <Player />
    </StyledHome >
  );
}

export default React.memo(HomeLayout);
