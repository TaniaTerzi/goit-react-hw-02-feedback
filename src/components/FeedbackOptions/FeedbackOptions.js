import React from "react";
import PropTypes from "prop-types";
import css from './feedbackOptions.module.css'

const FeedbackOptions = ( {onIncrementGood, onIncrementNeutral, onIncrementBad} ) => (
    <div className={css.feedbackOptions}>
        <button type="button" onClick={onIncrementGood}> good </button>
        <button type="button" onClick={onIncrementNeutral}> neutral </button>
        <button type="button" onClick={onIncrementBad}> bad </button>
    </div> 
);
export default FeedbackOptions

FeedbackOptions.propTypes = {
    FeedbackOptions: PropTypes.func,
    onIncrementNeutral: PropTypes.func,
    onIncrementBad: PropTypes.func,
  };