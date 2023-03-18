import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import classes from "../modules/Users.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import UserCardSkeleton from "./UserCardSkeleton";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageScrollEnd, setPageScrollEnd] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prevValue) => prevValue + 1);
      setPageScrollEnd(true);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch(`${props.url}/${page}/13`)
    .then((res) => res.json())
    .then((data) => {
      return setUsers(data.list);
    })
    setPage((prevValue) => prevValue + 1)
  }, [props.url])

  useEffect(() => {
    const load = setTimeout(() => {
      fetch(
        `${props.url}/${page}/13`
      )
        .then((res) => res.json())
        .then((data) => {
          setPageScrollEnd(false);
          return setUsers((prevValue) => [...prevValue, ...data.list]);
        });
    }, 500);
    return () => clearTimeout(load);
  }, [page]);

  return (
    <>
      <div className={classes["users"]}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={`${user.name} ${user.lastName}`}
            imageUrl={`${user.imageUrl}?v=${user.id}`}
            title={user.title}
          />
        ))}
        {pageScrollEnd && (
          <>
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </>)}
      </div>
      {pageScrollEnd &&  <LinearProgress sx={{ margin: "3% 15%" }} /> }
      
    </>
  );
};

export default Users;
