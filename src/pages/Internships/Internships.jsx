import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./Internships.module.scss";

const Internships = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [internships, setInternships] = useState([]);

  useEffect(async () => {
    let res = await fetch(`${BACKEND_URL}/api/internships`);
    res = await res.json();
    console.log(res.data);
    let data = res.data;
    setInternships([...data]);
  }, []);

  return (
    <div>
      {internships.length !== 0 ? (
        <div className={styles.cardsList}>
          {internships.map((elem, idx) => {
            return (
              <Card
                key={idx}
                role={elem.role}
                company={elem.company}
                eligibility={elem.eligibility}
                internId={elem._id}
                location={elem.location}
                applyLink={elem.applyLink}
                postLink={elem.postLink}
                createdAt={elem.createdAt}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.secondaryText}>
          No Published Internships available
        </div>
      )}
    </div>
  );
};

export default Internships;
