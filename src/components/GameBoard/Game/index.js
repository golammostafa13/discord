import { useState, useEffect } from "react";
import Board from "../Board/Index";
import Error from "../Error/Index";
import KeyBoard from "../KeyBoard/Index";
import NavBar from "../NavBar/Index";
import styles from "./style.module.css";

function Game(props) {
  const [letter, setLetter] = useState();
  const [changed, setChanged] = useState(false);
  const [letters, setLetters] = useState({});
  const [help, setHelp] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  const onClickDown = (event) => {
    if (event.key == "Enter") {
      setLetter("ENTER");
      setClicked(clicked + 1);
    } else if (event.key == "Backspace") {
      setLetter("DEL");
      setClicked(clicked + 1);
    } else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
      setLetter(event.key.toUpperCase());
      setClicked(clicked + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onClickDown);

    return () => window.removeEventListener("keydown", onClickDown);
  });

  const keyHandler = (letterValue) => {
    setLetter(letterValue);
    setClicked(clicked + 1);
  };
  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue);
    setChanged(!changed);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {error && <Error>{error}</Error>}
      <div className={styles.game}>
        <NavBar />
        <hr />
        <Board
          letter={letter}
          clicks={clicked}
          letters={LettersHandler}
          error={setError}
        />
        <KeyBoard keyHandler={keyHandler} letters={letters} changed={changed} />
      </div>
    </div>
  );
}

export default Game;