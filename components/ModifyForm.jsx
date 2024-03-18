"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Resizer from "react-image-file-resizer";

import "@/components/FormStyle.scss";

const ModifyForm = ({ currentPost }) => {
  const router = useRouter();
  const [title, setTitle] = useState(currentPost.title);
  const [desc, setDesc] = useState(currentPost.desc);
  const [category, setCategory] = useState(currentPost.category);
  const [images, setImages] = useState(currentPost.images);
  const [age, setAge] = useState(currentPost.age);
  const [gender, setGender] = useState(currentPost.gender);
  const [breed, setBreed] = useState(currentPost.breed);
  const [city, setCity] = useState(currentPost.city);
  const [county, setCounty] = useState(currentPost.county);
  const [phone, setPhone] = useState(currentPost.phone);
  const [email, setEmail] = useState(currentPost.email);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // COMPONENT FUNCTIONS
  const addUrlToImages = () => {
    if (images.length < 5 && imageUrl.startsWith("https://i.ibb")) {
      setImages((prev) => [...prev, imageUrl]);
    }
    setImageUrl("");
  };

  // const compressImage = (file) =>
  //   new Promise((resolve) => {
  //     Resizer.imageFileResizer(
  //       file,
  //       500,
  //       500,
  //       "WEBP",
  //       70,
  //       0,
  //       (uri) => {
  //         resolve(uri);
  //       },
  //       "base64"
  //     );
  //   });

  // const convertToBase64 = async (fileArr) => {
  //   // 1. Compress and convert
  //   for await (let file of fileArr) {
  //     try {
  //       const compressedImg = await compressImage(file);
  //       setImages((prev) => [...prev, compressedImg]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   // 2. Convert only
  //   // for await (let file of fileArr) {
  //   //   const reader = new FileReader();

  //   //   try {
  //   //     reader.readAsDataURL(file);
  //   //     reader.onload = () => {
  //   //       setImages((prev) => [...prev, reader.result]);
  //   //     };
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // }
  // };

  // const createImgUrl = (fileArr) => {
  //   const imagesUrl = [];
  //   fileArr.forEach((item) => imagesUrl.push(URL.createObjectURL(item)));
  //   setImagesUrl((prev) => [...prev, ...imagesUrl]);
  // };

  // const uploadImages = async (e) => {
  //   const selectedImg = [...e.target.files];

  //   if (images.length >= 5) {
  //     alert("Poti adauga maxim 5 poze!");
  //   } else if (images.length + selectedImg.length > 5) {
  //     const numberFilesToAdd = 5 - images.length;
  //     const newSelectedImg = selectedImg.slice(0, numberFilesToAdd);
  //     await convertToBase64(newSelectedImg);
  //     createImgUrl(newSelectedImg);
  //   } else {
  //     await convertToBase64(selectedImg);
  //     createImgUrl(selectedImg);
  //   }
  // };

  // const deleteImage = (urlToDelete) => {
  //   const newImagesUrl = imagesUrl.filter((urlItem, urlIndex) => {
  //     if (urlItem !== urlToDelete) return urlItem;
  //     if (urlItem === urlToDelete) {
  //       // modify images data
  //       setImages((prev) =>
  //         prev.filter((imgItem, imgIndex) => imgIndex !== urlIndex)
  //       );
  //     }
  //   });

  //   // modify images URL data
  //   setImagesUrl(newImagesUrl);
  // };

  // ADD TO DB FUNCTION
  const modifyDbPost = async (postModified) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/modifyPost`,
        postModified
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const postModified = {
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
      postId: currentPost.id,
    };
    const res = await modifyDbPost(postModified);

    if (res.data.id) {
      setFeedback("Anunt modificat cu succes!");
      setTimeout(() => {
        router.refresh(`/post/${res.data.id}`);
        router.push(`/post/${res.data.id}`);
      }, 2000);
    } else if (!res.data.id) {
      setFeedback(
        "Nu am putut modifica anuntul tau! Pozele au mai mult de 10MB!"
      );
    }
    setLoading(false);
    setTimeout(() => setFeedback(""), 10000);
  };

  // SOMETIMES HAPPENS TO:
  // !! when selecting multiple images be aware of the file name order and the order of the selected photos !!
  // the preview of the images shows the selected photos order but when you delete one it is possible to be another photo due to the wrong file name order (from windows?)
  // console.log(imagesUrl, "url");
  // console.log(images, "imgs");

  return (
    <form className="addform">
      <div className="images-input">
        <div className="images-upload">
          <label htmlFor="images">IMGBB URLs (max. 5)</label>
          <br />
          <input
            pattern="https://i.ibb"
            type="url"
            name="images"
            id="images"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="button" className="button3" onClick={addUrlToImages}>
          Adauga URL
        </button>

        <div className="images-display">
          {images &&
            images.map((item) => (
              <div key={item} className="img-box">
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
      {feedback && <span>{feedback}</span>}
      <button onClick={handleSubmit} className="button1">
        {loading ? "Modificam anuntul tau..." : " MODIFICA"}
      </button>
    </form>
  );
};

export default ModifyForm;
