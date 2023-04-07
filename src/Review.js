import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function checkNumber(num) {
    if (num > people.length - 1) return 0;
    if (num < 0) return people.length - 1;
    return num;
  }

  function nextPersonHandler() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  function prevPersonHandler() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  const randomPersonHandler = function () {
    let randomNum = Math.trunc(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPersonHandler} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPersonHandler} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPersonHandler} className="random-btn">
        Random pick
      </button>
    </article>
  );
};

export default Review;
