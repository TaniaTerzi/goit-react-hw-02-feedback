import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ( {onIncrementGood, onIncrementNeutral, onIncrementBad} ) => (
    <div>
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