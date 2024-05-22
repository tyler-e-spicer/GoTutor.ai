import React from "react";

// this will need to be built out for AI functionality

function TutorButton(): JSX.Element {
  const onHandleTutor = () => {
    // once connected to server, ensure this contrsucts the insturctions object for the AI and and processes the response accordinly, display loading status until promise resolves
    const alertString =
      "When playing with a two-stone handicap in Go, prioritize making strong and efficient groups while aiming for a balanced board position. Early on, focus on building influence and securing territory. Additionally, keep an eye on key points and potential weaknesses in your opponent's position to take advantage of any opportunities that arise.";
    // I want to refactor this into a chat modal istead of using window.
    window.alert(alertString);
  };

  return (
    <button className="tutor-button" onClick={onHandleTutor}>
      tutor
    </button>
  );
}

export default TutorButton;
