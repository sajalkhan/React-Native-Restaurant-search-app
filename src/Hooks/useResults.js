import React, { useState, useEffect } from "react";
import yelp from "../Api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      //   console.log("hi there", response.data);
      setResult(response.data.businesses);
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    setError("");
    searchApi("pasta");

    return () => {
      setResult([]);
    };
  }, []);

  return [result, searchApi, error];
};
