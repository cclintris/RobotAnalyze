import React from "react";
import "./Home.css";
import { Layout, Menu } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout style={{ height: "100vh" }} className="home">
      <AlibabaOutlined className="alilogo" />
      <Header style={{ height: "50px" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "50px" }}
        >
          <Menu.Item key="1">产品销量排名</Menu.Item>
          <Menu.Item key="2">交易量走向</Menu.Item>
          <Menu.Item key="3">热门产品销售浏览对比</Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <div className="show"></div>
      </Content>
      <Footer className="footer">
        @Ali Tianchi data vizualization web designed by cclin
      </Footer>
    </Layout>
  );
};

export default Home;
