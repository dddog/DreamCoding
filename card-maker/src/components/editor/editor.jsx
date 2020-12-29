import React from "react";
import CardEditForm from "../card_editor_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
  </section>
);

export default Editor;
