import React from "react";
import Home from "./routes/Home";
import AddFlight from "./routes/AddFlight";
import FlightTable from "./routes/FlightTable";
import ShowFlight from "./routes/ShowFlight";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "./components/design";
const { Header } = Layout;

const App = () => {
  return (
    <Router>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/add">Add Flight</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/flights">Search & Filter</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Route path="/" exact component={Home} />
          <Route path="/add/" component={AddFlight} />
          <Route exact path="/flights" component={FlightTable} />
          <Route path="/flights/:id" component={ShowFlight} />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
