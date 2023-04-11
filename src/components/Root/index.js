import React, {Component} from 'react';
import Header from "../Header";
import RootWrapper from "./wrapper";
import {
  aboutCommunicationRoute,
  localStorageAuthTokenKey, privacyRoute, topicRoute, VIEW_COMMUNICATIONS
} from "../../settings";
import Topics from "../Topics";
import HeaderMobile from "../Header/HeaderMobile";
import Communications from "../Communications";
import {Route} from "react-router-dom";
import About from "../About";
import Privacy from "../Privacy";
import TopicPage from "../TopicPage";
class Root extends Component {

  MOBILE_WIDTH = 900;
  SMALL_SCREEN = 1200;

  state = {
    screenWidth: 0,
    screenHeight: 0,
  };

  componentDidMount() {
    document.title = 'fixthenews';
    const authTokenFromRedux = this.props.store.token.object;
    const authTokenFromLocalStorage =
      localStorage.getItem(localStorageAuthTokenKey);
    if (!authTokenFromRedux && authTokenFromLocalStorage) {
      this.props.actions.updateToken({
        "auth_token": authTokenFromLocalStorage,
      });
      this.props.actions.getUser();
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    }, () => this.props.actions.updateDimensions({
      height: this.state.screenHeight,
      width: this.state.screenWidth,
      isMobile: this.getIsMobile(),
      isSmallScreen: this.getIsSmallScreen(),
    }));
  };

  getIsMobile = () => {
    return this.state.screenWidth < this.MOBILE_WIDTH;
  };

  getIsSmallScreen = () => {
    return (this.state.screenWidth < this.SMALL_SCREEN) && (this.state.screenWidth > this.MOBILE_WIDTH);
  };

  render() {
    const isMobile = this.getIsMobile();
    const isSmallScreen = this.getIsSmallScreen();

    const rootStyle = {
      backgroundColor: "#F8FAF9",
      height: `${this.state.screenHeight}px`,
    };

    const outerContainerStyle = {
      display: "flex",
      height: this.state.screenHeight - 75,
      width: "100%",
    };

    const innerContainerStyle = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "0 auto 0 auto",
    };

    const extraInnerContainerStyle = isSmallScreen || isMobile ? {} : {
      paddingLeft: '15%',
      paddingRight: '15%',
    };

    return (
      <div style={rootStyle}>
        {isMobile ? <HeaderMobile /> : <Header isSmallScreen={isSmallScreen}/>}
        <div style={outerContainerStyle}>
          <div style={{
            ...innerContainerStyle,
            ...extraInnerContainerStyle,
          }}>
            {VIEW_COMMUNICATIONS && <Communications />}
            <Route
              component={About}
              exact
              path={aboutCommunicationRoute}
            />
            <Route
              component={Privacy}
              exact
              path={privacyRoute}
            />
            <Route
              component={Topics}
              exact
              path={'/'}
            />
            <Route
              component={TopicPage}
              path={topicRoute}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RootWrapper(Root);
