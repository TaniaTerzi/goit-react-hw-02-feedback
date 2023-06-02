import React from "react";
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, percentage}) => 

<span>Good: {good}
    Neutral: {neutral}
    Bad: {bad}
    Total: {total}
    Positive Feedback: {percentage} %</span>;


export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };