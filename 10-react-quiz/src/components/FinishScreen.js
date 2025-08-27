function FinishScreen({ points, maxProgressPoints, highscore, dispatch }) {
  const percentage = (points / maxProgressPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "💡";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "✨";
  if (percentage >= 0 && percentage < 50) emoji = "✅";
  if (percentage === 0) emoji = "❌";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scroed<strong> {points} </strong>out of{" "}
        {maxProgressPoints}( {Math.ceil(percentage)}%)
      </p>
      <p className="highscroe">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
