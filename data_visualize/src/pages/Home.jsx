import React, { useState } from "react";
import "./Home.css";
import { Layout, Menu, Switch } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import MarketSales from "../components/templates/Marketsales";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/actions/theme";

const { Header, Content, Footer } = Layout;

const Home = (props) => {
  const dispatch = useDispatch();
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

  const toggleTheme = (checked) => {
    // checked === true ? light : dark
    checked ? dispatch(changeTheme("light")) : dispatch(changeTheme("dark"));
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
        <Switch
          checkedChildren="浅色主题"
          unCheckedChildren="深色主题"
          defaultChecked
          className="themetoggle"
          onChange={toggleTheme}
        />
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
