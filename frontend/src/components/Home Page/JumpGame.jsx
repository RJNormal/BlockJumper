import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore, resetScore } from '../../store/score';
import './Game.css';

function JumpGame() {
  const characterRef = useRef(null);
  const blockRef = useRef(null);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.value);
  const [isAnimating, setIsAnimating] = useState(false);

  const jump = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    characterRef.current.classList.add('animate');
    setTimeout(() => {
      characterRef.current.classList.remove('animate');
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const checkDead = setInterval(() => {
      const characterTop = parseInt(
        window.getComputedStyle(characterRef.current).getPropertyValue('top')
      );
      const blockLeft = parseInt(
        window.getComputedStyle(blockRef.current).getPropertyValue('left')
      );

     if (
         blockLeft < 70 &&  blockLeft > 30 &&  characterTop > 120 ) 
      {
        blockRef.current.style.animation = 'none';
        alert(`Game Over. Score: ${Math.floor(score / 100)}`);
        dispatch(resetScore());
        blockRef.current.style.animation = 'block 1s infinite linear';
      } else {
        dispatch(incrementScore());
      }
    }, 10);

    return () => clearInterval(checkDead);
  }, [dispatch, score]);

  return (
    <div className="game-container" onClick={jump}>
      <div className="game">
        <div id="character" ref={characterRef}></div>
        <div id="block" ref={blockRef}></div>
      </div>
      <p>Score: {Math.floor(score / 100)}</p>
    </div>
  );
}

export default JumpGame;
