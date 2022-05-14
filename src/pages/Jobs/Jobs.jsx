import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./Jobs.module.scss";

const Jobs = () => {
  const BACKEND_URL = "http://localhost:8001/api";
  const [jobs, setJobs] = useState([]);

  useEffect(async () => {
    let res = await fetch(`${BACKEND_URL}/jobs`);
    res = await res.json();
    console.log(res.data);
    let data = res.data;
    setJobs([...data]);
  }, []);

  return (
    <div>
      {jobs.length !== 0 ? (
        <div className={styles.cardsList}>
          {jobs.map((elem, idx) => {
            return (
              <Card
                key={idx}
                role={elem.role}
                company={elem.company}
                eligibility={elem.eligibility}
                jobId={elem._id}
                location={elem.location}
                applyLink={elem.applyLink}
                postLink={elem.postLink}
                createdAt={elem.createdAt}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.secondaryText}>No Published Jobs available</div>
      )}
    </div>
  );
};

export default Jobs;
