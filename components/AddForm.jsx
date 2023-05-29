"use client";

import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import "./FormStyle.scss";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Catel");
  const [images, setImages] = useState([]);
  const [age, setAge] = useState("<1");
  const [gender, setGender] = useState("M");
  const [breed, setBreed] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);

  // COMPONENT FUNCTIONS

  const convertToBase64 = async (fileArr) => {
    for await (let file of fileArr) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImages((prev) => [...prev, reader.result]);
        };
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createImgUrl = (fileArr) => {
    const imagesUrl = [];
    fileArr.forEach((item) => imagesUrl.push(URL.createObjectURL(item)));
    setImagesUrl((prev) => [...prev, ...imagesUrl]);
  };

  const uploadImages = (e) => {
    const selectedImg = [...e.target.files];

    if (images.length >= 5) {
      alert("Poti adauga maxim 5 poze!");
    } else if (images.length + selectedImg.length > 5) {
      const numberFilesToAdd = 5 - images.length;
      const newSelectedImg = selectedImg.slice(0, numberFilesToAdd);
      createImgUrl(newSelectedImg);
      convertToBase64(newSelectedImg);
    } else {
      createImgUrl(selectedImg);
      convertToBase64(selectedImg);
    }
  };

  const deleteImage = (urlToDelete) => {
    const newImagesUrl = imagesUrl.filter((urlItem, urlIndex) => {
      if (urlItem !== urlToDelete) return urlItem;
      if (urlItem === urlToDelete) {
        // modify images data
        setImages((prev) =>
          prev.filter((imgItem, imgIndex) => imgIndex !== urlIndex)
        );
      }
    });

    // modify images URL data
    setImagesUrl(newImagesUrl);
  };

  // ADD TO DB FUNCTION
  const addPostToDb = async (postToAdd) => {
    try {
      await axios.post("http://localhost:3000/api/addpost", postToAdd);
    } catch (err) {
      console.log(err);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postToAdd = {
      title,
      desc,
      category,
      images,
      age,
      gender,
      breed,
      city,
      county,
      phone,
      email,
    };
    await addPostToDb(postToAdd);
    setTitle("");
    setDesc("");
    setCategory("Catel");
    setImages([]);
    setAge("<1");
    setGender("M");
    setBreed("");
    setCity("");
    setCounty("");
    setPhone("");
    setEmail("");
    setImagesUrl([]);
  };
  return (
    <form>
      <div className="images-input">
        <label htmlFor="images">
          Adauga imagini
          <input
            type="file"
            name="images"
            id="images"
            multiple
            accept="image/*"
            onChange={uploadImages}
          />
        </label>
        <div className="images-display">
          {imagesUrl &&
            imagesUrl.map((item) => (
              <div key={item} className="img-box">
                <span onClick={() => deleteImage(item)}>x</span>
                <Image src={item} alt="img" width={50} height={50} />
              </div>
            ))}
        </div>
      </div>

      <label htmlFor="name">Nume:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="desc">Descriere:</label>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <div className="group-box">
        <label htmlFor="category">Categorie:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Catel">Catel</option>
          <option value="Pisica">Pisica</option>
          <option value="Pasare">Pasare</option>
          <option value="Rozatoare">Rozatoare</option>
        </select>

        <label htmlFor="age">Varsta (ani):</label>
        <select
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option value="<1">&#60;1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9+">9+</option>
        </select>
      </div>

      <div className="group-box">
        <div>
          <label htmlFor="breed">Rasa:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Sex:</label>
          <br />
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="M">Mascul</option>
            <option value="F">Femela</option>
          </select>
        </div>
      </div>

      <div className="group-box">
        <div>
          <label htmlFor="city">Oras:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="county">Localitate:</label>
          <input
            type="text"
            id="county"
            name="county"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </div>
      </div>

      <label htmlFor="phone">Telefon:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit} className="button1">
        ADAUGA
      </button>
    </form>
  );
};

export default AddForm;
