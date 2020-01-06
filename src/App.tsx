/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component, ReactNode } from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        lineHeight: "80px"
      }}
    >
      헤더
    </header>
  );
};

type MenuProps = {
  text?: string;
  children?: ReactNode;
  onClick: any;
};

const MenuItem: React.FC<MenuProps> = ({ text, children, onClick }) => {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        fontSize: "20px",
        textAlign: "center",
        lineHeight: "80px"
      }}
      onClick={() => onClick(text)}
    >
      {children}
    </div>
  );
};

type ILeftContent = {
  contentText: string;
};

const LeftContent: React.FC<ILeftContent> = ({ contentText }) => {
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "green",
        height: "100%"
      }}
    >
      {contentText}
    </div>
  );
};

type ILeftButtons = {
  onClick: any;
};

const LeftButtons: React.FC<ILeftButtons> = ({ onClick }) => {
  const menuTitles: string[] = ["1", "2", "3", "4", "5", "<<"];
  return (
    <div
      style={{
        width: "80px",
        height: "100%",
        backgroundColor: "yellow",
        position: "relative"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {menuTitles.length > 0 &&
          menuTitles.map((title, i) => {
            return (
              <MenuItem onClick={onClick} key={i}>
                {title}
              </MenuItem>
            );
          })}
      </div>
    </div>
  );
};

interface ILeftMenuState {
  contentText: string;
  isShow: boolean;
}

interface ILeftMenuProps {}
class LeftMenu extends Component<ILeftMenuProps, ILeftMenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      contentText: "",
      isShow: true
    };
  }

  onClick = (title: string) => {
    const { isShow } = this.state;
    console.log(isShow);
    this.setState({
      isShow: !isShow
    });
  };

  render() {
    const { contentText = "", isShow } = this.state;
    return (
      <div style={{ display: "flex", position: "relative" }}>
        <LeftButtons onClick={this.onClick}></LeftButtons>
        {isShow && <LeftContent contentText={contentText}></LeftContent>}
      </div>
    );
  }
}

const RightMenu: React.FC = () => {
  return (
    <div style={{ flex: "1", backgroundColor: "red", height: "100%" }}>
      <img
        src="https://i.ytimg.com/vi/PQq_rAtkzmU/maxresdefault.jpg"
        alt="img"
        width="100px"
        height="100px"
      />
      <a href="javascript:;" onClick={() => alert("hi")}>
        하이하이!
      </a>
    </div>
  );
};

interface IAppState {
  number: number;
}

interface IAppProps {}

export default class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: `calc(100vh - 80px)`
          }}
        >
          <LeftMenu />
          <RightMenu />
        </div>
      </>
    );
  }
}
