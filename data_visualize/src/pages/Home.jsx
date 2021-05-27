import React from "react";
import "./Home.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout style={{ height: "100vh" }} className="home">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <div className="show"></div>
      </Content>
      <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Home;
