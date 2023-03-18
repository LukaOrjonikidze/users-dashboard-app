import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbsContext from '../context/BreadcrumbsContext';
import classes from "../modules/UserCard.module.css";

const UserCard = (props) => {
  const context = useContext(BreadcrumbsContext);

  return (
    <Link onClick={() => {
      context.onAdd({
      name: props.username,
      url: `//${window.location.host}/users/${props.id}`});
      }} style={{textDecoration: "none", color: "inherit"}} to={`//${window.location.host}/users/${props.id}`}>
      <div className={classes['user-card']}>
          <img loading="lazy" className={classes['user-image']} src={props.imageUrl} />
          <div className={classes['user-info']}>
              <strong className={classes['user-name']}>{props.username}</strong>
              <span className={classes['user-position']} >{props.title}</span>
          </div>
      </div>
    </Link>
  )
}

export default UserCard