import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  // states
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const imgURL = `https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${searchText}&image_type=photo&pretty=true`;

  // fetching API using useEffect
  useEffect(() => {
    const image = async () => {
      setLoading(true);
      const res = await axios.get(imgURL);
      setImages(res.data.hits);
      setLoading(false);
    };
    image();
  }, [searchText, imgURL]);

  return (
    <div>
      {/* header part */}
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <div>
          <input
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search images"
          />
        </div>

        <div className="link">
          <a href="/auth/login">Login</a>
          <a href="/auth/register">Sign Up</a>
        </div>
      </div>
      {/* images gallery */}
      {images.length === 0 && (
        <h2 className="loading"> Sorry! no images found.</h2>
      )}
      ;
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <section className="section">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </section>
      )}
    </div>
  );
};

export default ImageGallery;
