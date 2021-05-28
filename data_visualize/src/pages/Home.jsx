import React, { useState, useEffect } from "react";
import "./Home.css";
import { Layout, Menu } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import MarketSales from "../components/templates/Marketsales";

const { Header, Content, Footer } = Layout;

const Home = (props) => {
  const [defaultMenuKey, setDefaultMenuKey] = useState(["1"]);

  const handleMenuSwitch = (o) => {
    const key = o.key;
    switch (key) {
      case "1":
        props.router.push("/marketsales");
        break;
      case "2":
        props.router.push("/transactions");
        break;
      case "3":
        props.router.push("/salesviews");
        break;
      default:
        console.log("not found");
    }
  };

  return (
    <Layout style={{ height: "100vh" }} className="home">
      <AlibabaOutlined className="alilogo" />
      <Header style={{ height: "50px" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultMenuKey}
          style={{ lineHeight: "50px" }}
          onClick={handleMenuSwitch}
        >
          <Menu.Item key="1">产品销量排名</Menu.Item>
          <Menu.Item key="2">交易量走向</Menu.Item>
          <Menu.Item key="3">热门产品销售浏览比</Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <div className="show">{props.children || <MarketSales />}</div>
      </Content>
      <Footer className="footer">
        @Ali Tianchi data vizualization web designed by cclin
      </Footer>
    </Layout>
  );
};

export default Home;
