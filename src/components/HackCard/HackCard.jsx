import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./HackCard.module.scss";
import { HackCardImg } from "../assets/images";

const HackCard = (props) => {
  const {
    name,
    startDate,
    prizes,
    mode,
    applyLink,
    postLink,
    endDate,
    createdAt,
  } = props;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const time = new Date(createdAt);

  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className={styles.card}>
      <div className={styles.companyLogo}>
        <HackCardImg />
      </div>
      <div className={styles.info}>
        <div className={styles.primaryText}>{name}</div>
        <div className={styles.combine}>
          <div className={styles.secondaryText}>
            {"Timeline: " +
              start.getDate() +
              " " +
              monthNames[start.getMonth()] +
              " - " +
              end.getDate() +
              " " +
              monthNames[end.getMonth()]}
          </div>
          <div className={styles.secondaryText}>Mode: {mode}</div>
          {/* <div className={styles.secondaryText}>Prizes: {prizes}</div> */}
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

export default HackCard;

HackCard.propTypes = {
  name: PropTypes.string,
  prizes: PropTypes.string,
  startDate: PropTypes.string,
  applyLink: PropTypes.string,
  postLink: PropTypes.string,
  mode: PropTypes.string,
  createdAt: PropTypes.string,
  endDate: PropTypes.string,
};
