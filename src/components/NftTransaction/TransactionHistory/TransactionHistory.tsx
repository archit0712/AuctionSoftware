import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./TrasnsactionHistory.module.css";
import { auth, db } from "../../../firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Content = [
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Sucess",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
];
const TransactionHistory = () => {
  const [player, setPlayer] = useState<any>([]);
  const adminData = useSelector((state: RootStateOrAny) => state?.adminData);
  const [playerID, setPlayerId] = useState("");
  const query1 = query(collection(db, "players"));
  const navigate = useNavigate();

  const findPlayer = () => {
    navigate(`/player/${playerID}`);
  };

  // useEffect(() => {
  //   const run = async () => {
  //     let playerData: any = [];
  //     await getDocs(query1).then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         if (doc.exists()) {
  //           playerData.push(doc.data());
  //           console.log(playerData);
  //           setPlayer(playerData);
  //         } else {
  //           console.log("No Player Data");
  //         }
  //       });
  //     });
  //   };
  //   run();
  // }, []);
  return (
    <div>
      <h2> Player List</h2>
      <h4>Enter Player Id</h4>
      <div className={styles.j}></div>
      <input
        type="text"
        id="number"
        className="form__input"
        required
        onChange={(e: React.ChangeEvent<any>) => {
          setPlayerId(e.target.value);
        }}
      ></input>
      <div></div>
      <div className={styles.j}>
        <button onClick={findPlayer}>Find</button>
      </div>
    </div>
  );
};

export default TransactionHistory;
