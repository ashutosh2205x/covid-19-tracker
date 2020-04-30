import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Cards, Charts, Country } from "./components";
import { Data } from "./api/api";
import SARS from "./assets/SRS.png";
import { Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    counrty: "",
  };
  async componentDidMount() {
    const fetchedData = await Data();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await Data(country);
    this.setState({ data: fetchedData, country: country });
    // console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.titleheader}>
          <Typography variant="h4" className={styles.text}>
            C
          </Typography>
          <img src={SARS} alt="img" className={styles.corona} />
          <Typography variant="h4" className={styles.text}>
            VID-19 Tracker
          </Typography>
        </div>
        {country && country!=="global" ? (
          
          <Typography variant="h5" style={{fontSize: "larger", textAlign: "center"}}>
            Current situation in&nbsp;
            <span className={styles.bold}>{country}</span>
          </Typography>
        ) : 
        <Typography variant="h6" style={{fontSize: "larger", textAlign: "center"}}>
            Current situation&nbsp;<span className={styles.bold}>worldwide</span>
          </Typography>}
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
