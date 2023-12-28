import React, { useState, useEffect } from 'react';
import './NumberGuessingGame.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NumberGuessingGame = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [guessHistory, setGuessHistory] = useState([]);

  useEffect(() => {
    if (attempts === 0) {
      setMessage(
        `게임 오버! 정답은 ${targetNumber}입니다. 새로운 게임을 시작하세요.`
      );
      setTargetNumber(generateRandomNumber());
      setAttempts(5);
      setGuessHistory([]);
    }
  }, [attempts, targetNumber]);

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setMessage('숫자를 작성해주세요.');
    } else {
      const newGuessHistory = [...guessHistory, guess];
      setGuessHistory(newGuessHistory);

      if (guess === targetNumber) {
        setMessage(
          `축하합니다! 정답을 맞추셨습니다. 정답은 ${targetNumber}입니다.`
        );
        setTargetNumber(generateRandomNumber());
        setAttempts(5);
        setGuessHistory([]);
      } else {
        const remainingAttempts = attempts - 1;
        setAttempts(remainingAttempts);

        if (remainingAttempts === 0) {
          setMessage(
            `게임 오버! 정답은 ${targetNumber}입니다. 새로운 게임을 시작하세요.`
          );
          setTargetNumber(generateRandomNumber());
          setAttempts(5);
          setGuessHistory([]);
        } else {
          setMessage(
            guess < targetNumber
              ? '너무 낮습니다. 다시 시도하세요.'
              : '너무 높습니다. 다시 시도하세요.'
          );
        }
      }

      setUserGuess('');
    }
  };

  return (
    <div className="number-guessing-game">
      <h1 className="text-center">Number Guessing Game</h1>
      <p className="text-center">1부터 100 사이 숫자 맞추기</p>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="number"
          value={userGuess}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter your guess"
          min="1"
          max="100"
          required
        />
        <button type="submit" className="btn btn-primary mt-2">
          제출하기
        </button>
      </form>
      <div className="mt-3">
        <p>남은 기회: {attempts}</p>
        <p>입력한 숫자: {guessHistory.join(', ')}</p>
      </div>
      {message && <div className="message mt-3">{message}</div>}
    </div>
  );
};

export default NumberGuessingGame;