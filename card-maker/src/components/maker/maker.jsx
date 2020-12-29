import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Shin1",
      company: "Kakao",
      theme: "light",
      title: "S/W Engineer",
      email: "azskw1101@naver.com",
      message: "go for it",
      fileName: "shin",
      fileURL: null,
    },
    {
      id: "2",
      name: "Shin2",
      company: "Kakao",
      theme: "dark",
      title: "S/W Engineer",
      email: "azskw1101@naver.com",
      message: "go for it",
      fileName: "shin",
      fileURL: "shin.png",
    },
    {
      id: "3",
      name: "Shin3",
      company: "Kakao",
      theme: "colorful",
      title: "S/W Engineer",
      email: "azskw1101@naver.com",
      message: "go for it",
      fileName: "shin",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
