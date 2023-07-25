import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const SearchApi = async (searchTerm) => {
    console.log("hi");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("somethings went wrong");
    }
  };

  useEffect(() => {
    SearchApi("pork");
  }, []);

  return [SearchApi, results, errorMessage];
};
