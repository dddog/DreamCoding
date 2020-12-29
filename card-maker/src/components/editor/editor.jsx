import React from "react";
import CardEditForm from "../card_editor_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        card={cards[key]}
        key={key}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
