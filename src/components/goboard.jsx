import React, { useState } from "react";

// component imports
import Intersection from "./intersection";
import BackArrow from "./back-arrow";
import ForwardArrow from "./forward-arrow";
import PassButton from "./pass-button";
import SaveButton from "./save-button";
import StyleBGButton from "./style-button";
import playstone from "../assets/playstone.mp3";
import CurrentPlayer from "./current-player";
import TutorButton from "./tutor-button";
import Handicap from "./handicap";
import UserComponent from "./current-user";

// utils imports
import newBoard from "../utils/board-functions";
import findOpponentNeighbors from "../utils/find-neighbors";
import isCaptured from "../utils/is-captured";
import { forwardInTime, backInTime } from "../utils/time-travel";
import handicapClick from "../utils/handicap";

// accepts array of opponent stones and scans the groups looking for liberties (false) or

function GoBoard() {
  const [history, setHistory] = useState(newBoard());
  const [pastMoves, setPastMoves] = useState([newBoard()]);
  const [currentMove, setCurrentMove] = useState(1);
  const [whiteStones, setWhiteStones] = useState([]);
  const [blackStones, setBlackStones] = useState([]);
  const [passCount, setPassCount] = useState(1);
  const [handicapLevel, setHandicapLevel] = useState(0);
  const [blackCaptures, setBlackCaptures] = useState(0);
  const [whiteCaptures, setWhiteCaptures] = useState(0);
  let blackIsNext = currentMove % 2 !== 0;

  // console.log(history)

  function playStone(index) {
    const audio = new Audio(playstone);
    const updatedHistory = history.slice();
    const intersectionName = updatedHistory[index].name;
    setPassCount(0);

    if (
      whiteStones.includes(intersectionName) ||
      blackStones.includes(intersectionName)
    ) {
      return;
    }

    audio.play();

    if (blackIsNext) {
      updatedHistory[index].stone = "⚫";
      setBlackStones((prevBlackStones) => {
        const updatedBlackStones = [...prevBlackStones, intersectionName];
        return updatedBlackStones;
      });
    } else {
      updatedHistory[index].stone = "⚪";
      setWhiteStones((prevWhiteStones) => {
        const updatedWhiteStones = [...prevWhiteStones, intersectionName];
        return updatedWhiteStones;
      });
    }

    // capture logic before updating state
    // console.log('index ', index)
    const opponentNeighbors = findOpponentNeighbors(
      history,
      index,
      currentMove
    );

    // console.log('opponentNeighbors', opponentNeighbors);
    // console.log('currentMove ', currentMove, 'opponentNeighbors ', opponentNeighbors)

    // console.log("updatedHistory ", updatedHistory);

    const capturedResult = isCaptured(
      updatedHistory,
      currentMove,
      opponentNeighbors
    );

    // console.log("capturedResult", capturedResult);
    // console.log('history before for loop ', history);

    if (capturedResult) {
      for (const position of updatedHistory) {
        if (capturedResult.includes(updatedHistory.indexOf(position))) {
          position.stone = null;
        }
      }
    }

    // console.log('history after for loop ', history);
    // need to update white & black stone arrays
    //update state once board has accounted for captures
    // console.log("capturedResult length: ", capturedResult.length);

    if (blackIsNext && capturedResult) {
      setBlackCaptures(blackCaptures + capturedResult.length);
    } else if (!blackIsNext && capturedResult) {
      setWhiteCaptures(whiteCaptures + capturedResult.length);
    }

    setCurrentMove(currentMove + 1);
    setHistory(updatedHistory);

    const pastMovesForUpdate = [...pastMoves];
    pastMovesForUpdate.push(JSON.parse(JSON.stringify(history)));
    setPastMoves(pastMovesForUpdate);
  }

  function handicapClick() {
    const starPoints = [
      "Q16",
      "D4",
      "Q4",
      "D16",
      "Q10",
      "D10",
      "K16",
      "K4",
      "K10",
    ];

    const starIndices = [72, 288, 300, 60, 186, 174, 66, 294, 180];
    const startingHistory = history.slice(); // shallow copy

    for (const intersection of startingHistory) {
      if (
        intersection.name === starPoints[handicapLevel] &&
        handicapLevel < starPoints.length
      ) {
        intersection.stone = "⚪";
        console.log("intersection ", intersection);
      }
    }

    setHistory(startingHistory);

    setCurrentMove(1);

    setHandicapLevel(handicapLevel + 1);
  }

  return (
    <>
      <div className="bg-image">
        <div className="go-board">
          <BackArrow
            onBackClick={() =>
              backInTime(currentMove, pastMoves, setHistory, setCurrentMove)
            }
          />
          <StyleBGButton />
          <ForwardArrow
            onForwardClick={() =>
              forwardInTime(currentMove, pastMoves, setHistory, setCurrentMove)
            }
          />
          <UserComponent
            whiteCaptures={whiteCaptures}
            blackCaptures={blackCaptures}
            currentMove={currentMove}
          />
          {history.map((intersection, index) => (
            <Intersection
              key={index}
              index={index}
              name={intersection.name}
              stone={intersection.stone}
              onIntersectionClick={() => playStone(index)}
            />
          ))}
          <TutorButton />
          <Handicap
            onHandicapClick={() => handicapClick(handicapLevel, history)}
          />
          <CurrentPlayer currentMove={currentMove} />
          <PassButton
            passCount={passCount}
            setPassCount={setPassCount}
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
          />
          <SaveButton
            pastMoves={pastMoves}
            blackIsNext={blackIsNext}
            currentMove={currentMove}
          />
        </div>
      </div>
    </>
  );
}

export default GoBoard;
