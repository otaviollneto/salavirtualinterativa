import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: (Math.random() + 1).toString(36).substring(7),
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    return (
      <div className="container2">
        <div>
          <h1 style={{ fontSize: "45px" }}>BarMeet - Video Chamada</h1>
          <p style={{ fontWeight: "200" }}>
            Que tal bater um papo com alguém de forma diferente!
          </p>
        </div>

        <div
          style={{
            background: "white",
            width: "30%",
            height: "auto",
            padding: "20px",
            minWidth: "400px",
            textAlign: "center",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>
            Código da Sala
          </p>
          <Input
            value={this.state.url}
            placeholder="Código"
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.join}
            style={{ margin: "20px" }}
          >
            Entrar
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
