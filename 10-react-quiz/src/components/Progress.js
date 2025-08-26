function Progress({ index, numQuestions, points, maxProgressPoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxProgressPoints}
      </p>
    </header>
  );
}

export default Progress;
