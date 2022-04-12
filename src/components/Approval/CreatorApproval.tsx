import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Approval.module.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import { error } from "console";
import { Navigate } from "react-router-dom";

const Approval = () => {
  const { playerId } = useParams();
  const [userData, setUserData] = useState<any>();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [bid, setBid] = useState(0);

  const handleFiftyIncremental = () => {
    setBid(bid + 50);
  };

  const handleHundredIncremental = () => {
    setBid(bid + 100);
  };
  const handleTwoHunderdIncremental = () => {
    setBid(bid + 200);
  };
  const handleFiveHundredIncremental = () => {
    setBid(bid + 500);
  };
  const handleRefresh = () => {
    setBid(0);
  };

  const handleHouse = async (houseName: string) => {
    console.log(houseName);
    if (houseName === "") {
      alert("Please Select House");
    } else {
      if (playerId) {
        if (bid === 0) {
          alert("No Bid Placed");
        } else {
          await updateDoc(doc(db, "players", playerId), {
            isHouseGiven: true,
            houseName: houseName,
            bidPoints: bid,
            comments: comment,
          })
            .then(() => {
              alert("SuccessFul!");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        alert("No Player ID");
      }
    }
  };

  const handlePrevious = () => {
    if (playerId) {
      if (parseInt(playerId) < 1) {
        alert("You are at start of list");
      } else {
        navigate(`/player/${parseInt(playerId) - 1}`);
      }
    }
  };
  const handleNext = () => {
    if (playerId) {
      navigate(`/player/${parseInt(playerId) + 1}`);
    }
  };
  useEffect(() => {
    const run = async () => {
      if (playerId) {
        let constant: any = [];
        console.log("hey");
        await getDoc(doc(db, "players", playerId))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.data());

              setUserData(snapshot.data());
            } else {
              console.log("error with snapshot");
            }
          })
          .then(() => {
            //get document url
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(userData);
      } else {
      }
    };
    run();
  }, [playerId]);

  return (
    <div className={styles.main}>
      <div className="ml-min">
        <h3>Player Details</h3>
      </div>

      <div className={styles.section}>
        <div className={styles.j}>
          <h6>Bid Placed</h6>{" "}
          {userData?.bidPoints !== 0 && <h6>Sold To {userData?.houseName}</h6>}
          {userData?.bidPoints === 0 && <h6> {bid}</h6>}
        </div>
        <div className={styles.j}>
          <h4>Photo</h4>{" "}
          <img
            src={
              `../playerPhoto/${playerId}.jfif` || `../playerPhoto/download.png`
            }
            alt="pht"
            width={250}
          />
        </div>
        <div className={styles.j}>
          <h4>Name</h4> <p>{userData?.name}</p>
        </div>
        <div className={styles.j}>
          <h4>Enrollment Number</h4> <p>{userData?.enrollment}</p>
        </div>
        <div className={styles.j}>
          <h4>Email address</h4> <p>{userData?.email}</p>
        </div>
        <div className={styles.j}>
          <h4>Score Out of 10</h4> <p>{userData?.score}</p>
        </div>
        <div className={styles.j}>
          <h4>Sports Played</h4> <p>{userData?.sportsPlayed}</p>
        </div>
        {/* <div className={styles.j}>
          <h4>Youtube Link</h4> <p>{userData?.socials?.youtubeProfileUrl}</p>
        </div>
        <div className={styles.j}>
          <h4>Personal Wbsite</h4> <p>{userData?.socials?.portfolioUrl}</p>
        </div>
        <div className={styles.j}>
          <h4>Date of Joining</h4> <p>{userData?.dateOfJoining}</p>
        </div> */}

        <div className={styles.j}>
          <button onClick={handleFiftyIncremental}>50</button>
          <button onClick={handleHundredIncremental}>100</button>
          <button onClick={handleTwoHunderdIncremental}>200</button>
          <button onClick={handleFiveHundredIncremental}>500</button>
          <button onClick={handleRefresh}>Reset</button>
        </div>
      </div>
      {/* <div className={styles.section}>
        <h3>Bank Details</h3>
        <div className={styles.j}>
          <h4>Account Holder Name</h4>{" "}
          <p>{userData?.bankAccountDetails?.accountHolderName}</p>
        </div>
        <div className={styles.j}>
          <h4>Account no.</h4>{" "}
          <p>{userData?.bankAccountDetails?.accountNumber}</p>
        </div>
        <div className={styles.j}>
          <h4>IFSC code</h4> <p>{userData?.bankAccountDetails?.ifscCode}</p>
        </div>
        <div className={styles.j}>
          <h4>Account Type</h4>{" "}
          <p>{userData?.bankAccountDetails?.accountType}</p>
        </div>
        <div className={styles.j}>
          <h4>Mobile No.</h4>{" "}
          <p>{userData?.bankAccountDetails?.accountHolderPhoneNumber}</p>
        </div>
      </div> */}
      <div className={styles.section}>
        <div className={styles.j}>
          <h4>Comments</h4>{" "}
          <input
            className={styles.j}
            name="comment"
            placeholder="comments"
            required
            onChange={(e: React.ChangeEvent<any>) => {
              setComment(e.target.value);
            }}
          ></input>{" "}
        </div>
        {userData?.houseName === "" && (
          <div className={styles.j}>
            <button
              onClick={() => {
                handleHouse("Heroic Hearts");
              }}
            >
              Heroic Hearts
            </button>
            <button
              onClick={() => {
                handleHouse("Super Spades");
              }}
            >
              Super Spades
            </button>
            <button
              onClick={() => {
                handleHouse("Mighty Boltz");
              }}
            >
              Mighty Boltz
            </button>
            <button
              onClick={() => {
                handleHouse("Keen Kickers");
              }}
            >
              Keen Kickers
            </button>
          </div>
        )}
        <div className={styles.j}>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Approval;
