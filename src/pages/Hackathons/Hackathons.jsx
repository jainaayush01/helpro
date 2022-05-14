import React, { useEffect, useState } from "react";
import { HackCard } from "../../components";
import styles from "./Hackathons.module.scss";

const Hackathons = () => {
  const BACKEND_URL = "http://localhost:8001/api";
  const [hackathons, setHackathons] = useState([]);

  useEffect(async () => {
    let res = await fetch(`${BACKEND_URL}/hackathons`);
    res = await res.json();
    console.log(res.data);
    let data = res.data;
    setHackathons([...data]);
  }, []);

  return (
    <div>
      {hackathons.length !== 0 ? (
        <div className={styles.cardsList}>
          {hackathons.map((elem, idx) => {
            return (
              <HackCard
                key={idx}
                name={elem.name}
                startDate={elem.startDate}
                endDate={elem.endDate}
                hackId={elem._id}
                mode={elem.mode}
                applyLink={elem.applyLink}
                postLink={elem.postLink}
                prizes={elem.prizes}
                createdAt={elem.createdAt}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.secondaryText}>
          No Published Hackathons available
        </div>
      )}
    </div>
  );
};

export default Hackathons;
