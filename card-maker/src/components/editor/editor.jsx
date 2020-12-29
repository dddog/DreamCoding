import React from "react";
import CardEditForm from "../card_editor_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
