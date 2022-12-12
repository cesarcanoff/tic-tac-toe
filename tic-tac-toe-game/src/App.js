import { GlobalStyles } from "./styles/global";
import { FieldBox } from "./components/FieldBox";
import { Container } from "./components/Container";
import { BoxPlayTime, SuccessScreen} from "./styles/styles";

import { useState, useEffect } from "react";

export const App = () => {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const [field1, setField1] = useState("-");
  const [field2, setField2] = useState("-");
  const [field3, setField3] = useState("-");
  const [field4, setField4] = useState("-");
  const [field5, setField5] = useState("-");
  const [field6, setField6] = useState("-");
  const [field7, setField7] = useState("-");
  const [field8, setField8] = useState("-");
  const [field9, setField9] = useState("-");

  function markBox(field) {
    if (winner === "") {
      settingField(field);
      changePlayer(player);
    }
  }
  
  useEffect(() => {
    haveWinner();
  })
  

  function haveWinner() {
    if (field1 !== "-" && field1 === field2 && field2 === field3) {
      setWinner(field1);
    } else if (field4 !== "-" && field4 === field5 && field5 === field6) {
      setWinner(field4);
    } else if (field7 !== "-" && field7 === field8 && field8 === field9) {
      setWinner(field7);
    } else if (field1 !== "-" && field1 === field5 && field5 === field9) {
      setWinner(field1);
    } else if (field3 !== "-" && field3 === field5 && field5 === field7) {
      setWinner(field3);
    } else if (field1 !== "-" && field1 === field4 && field4 === field7) {
      setWinner(field1);
    } else if (field2 !== "-" && field2 === field5 && field5 === field8) {
      setWinner(field2);
    } else if (field3 !== "-" && field3 === field6 && field6 === field9) {
      setWinner(field3);
    }
  }

  function settingField(field) {
    switch (field) {
      case "field1":
        if (field1 === "-") {
          setField1(player);
        } else {
          return;
        }
        break;
      case "field2":
        if (field2 === "-") {
          setField2(player);
        } else {
          return;
        }
        break;
      case "field3":
        if (field3 === "-") {
          setField3(player);
        } else {
          return;
        }
        break;
      case "field4":
        if (field4 === "-") {
          setField4(player);
        } else {
          return;
        }
        break;
      case "field5":
        if (field5 === "-") {
          setField5(player);
        } else {
          return;
        }
        break;
      case "field6":
        if (field6 === "-") {
          setField6(player);
        } else {
          return;
        }
        break;
      case "field7":
        if (field7 === "-") {
          setField7(player);
        } else {
          return;
        }
        break;
      case "field8":
        if (field8 === "-") {
          setField8(player);
        } else {
          return;
        }
        break;
      case "field9":
        if (field9 === "-") {
          setField9(player);
        } else {
          return;
        }
        break;
      default:
    }
  }

  function changePlayer(player) {
    player === "X" ? setPlayer("O") : setPlayer("X");
  }

  return (
    <div>
      { winner !== "" ? <SuccessScreen winner={winner}>
        <h1>The champion was the player: {winner}</h1>
        </SuccessScreen> : "" }
      <GlobalStyles />
      <BoxPlayTime player={player}>TURN - <span>{player}</span></BoxPlayTime>
      <Container>
        <FieldBox
          borderPosition="bottom-right"
          onClick={() => markBox("field1")}
          playerMark={field1}
        />
        <FieldBox
          borderPosition="bottom-right"
          onClick={() => markBox("field2")}
          playerMark={field2}
        />
        <FieldBox
          borderPosition="bottom"
          onClick={() => markBox("field3")}
          playerMark={field3}
        />
        <FieldBox
          borderPosition="bottom-right"
          onClick={() => markBox("field4")}
          playerMark={field4}
        />
        <FieldBox
          borderPosition="bottom-right"
          onClick={() => markBox("field5")}
          playerMark={field5}
        />
        <FieldBox borderPosition="bottom" onClick={() => markBox("field6")} playerMark={field6} />
        <FieldBox
          borderPosition="right"
          onClick={() => markBox("field7")}
          playerMark={field7}
        />
        <FieldBox
          borderPosition="right"
          onClick={() => markBox("field8")}
          playerMark={field8}
        />
        <FieldBox
          onClick={() => markBox("field9")}
          playerMark={field9}
        />
      </Container>
    </div>
  );
};

export default App;
