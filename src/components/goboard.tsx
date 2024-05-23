import React, { useState } from "react";
import { StarPoint } from "../../types";

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

function GoBoard() {
  const [history, setHistory] = useState<StarPoint[]>(newBoard());
  const [pastMoves, setPastMoves] = useState<StarPoint[][]>([newBoard()]);
  const [currentMove, setCurrentMove] = useState<number>(1);
  const [whiteStones, setWhiteStones] = useState<string[]>([]);
  const [blackStones, setBlackStones] = useState<string[]>([]);
  const [passCount, setPassCount] = useState<number>(1);
  const [handicapLevel, setHandicapLevel] = useState<number>(0);
  const [blackCaptures, setBlackCaptures] = useState<number>(0);
  const [whiteCaptures, setWhiteCaptures] = useState<number>(0);
  //find a better state solution that this

  let blackIsNext = currentMove % 2 !== 0;

  // console.log(history)

  function playStone(index: number) {
    const audio = new Audio(playstone);
    const updatedHistory: StarPoint[] = history.slice();
    const intersectionName: string = updatedHistory[index].name;
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

    const opponentNeighbors: number[] = findOpponentNeighbors(
      history,
      index,
      currentMove
    );

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
    if (handicapLevel >= 9) return;

    const starIndices = [72, 288, 300, 60, 186, 174, 66, 294, 180];
    const startingHistory = history.slice(); // shallow copy
    startingHistory[starIndices[handicapLevel]].stone = "⚪";
    setHistory(startingHistory);
    // setCurrentMove(1);
    setHandicapLevel(handicapLevel + 1);
    console.log(currentMove, handicapLevel, startingHistory);
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
          <Handicap onHandicapClick={handicapClick} />
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
