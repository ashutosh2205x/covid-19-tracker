import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import {fetchCountries} from '../../api/api'
const Country = ({handleCountryChange}) => {
const [fetchedCountries, setCountries]= useState([]);

useEffect(()=>{
    const fetchData = async()=>{
        setCountries(await fetchCountries())
    }
    fetchData();
}, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
  {fetchedCountries.map((country, index)=><option value={country} key={index}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
