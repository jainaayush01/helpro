import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    role,
    company,
    eligibility,
    location,
    applyLink,
    postLink,
    createdAt,
  } = props;
  const time = new Date(createdAt);

  return (
    <div className={styles.card}>
      <div className={styles.companyLogo}>{company}</div>
      <div className={styles.info}>
        <div className={styles.primaryText}>{role}</div>
        <div className={styles.combine}>
          <div className={styles.secondaryText}>{company}</div>
          <div className={styles.secondaryText}>Location: {location}</div>
          <div className={styles.secondaryText}>Eligibility: {eligibility}</div>
        </div>
        <div className={styles.ternaryText}>
          {time.toLocaleString(undefined, { timeZone: "Asia/Kolkata" })}
        </div>
      </div>
      <div className={styles.btns}>
        <a className={styles.btn} href={applyLink}>
          Apply Link
        </a>
        <a className={styles.btn} href={postLink}>
          Referral Post
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  role: PropTypes.string,
  eligibility: PropTypes.string,
  company: PropTypes.string,
  applyLink: PropTypes.string,
  postLink: PropTypes.string,
  location: PropTypes.string,
  createdAt: PropTypes.string,
};
