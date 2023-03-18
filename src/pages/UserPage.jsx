import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from '../components/UserProfile';
import classes from "../modules/UserPage.module.css";
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbsContext from '../context/BreadcrumbsContext';
import Users from '../components/Users';

const UserPage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [usersCrumbs, setUsersCrumbs] = useState([]);

  useEffect(() => {
    fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`)
    .then(res => res.json())
    .then(data => setUserData(data));
  }, []);
  console.log(userData);
  // make page rerender after userId changes
  useEffect(() => {
    fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`)
   .then(res => res.json())
   .then(data => setUserData(data));
   console.log(userId);
  }, [userId]);

  const addUser = (user) => {
    setUsersCrumbs(prevValue => [...prevValue, user]);
  }

  
  return (
    <BreadcrumbsContext.Provider value={{users: usersCrumbs, onAdd: addUser}}>
      <div className={classes['user-page']}>
        <UserProfile userData={userData}/>

        <Breadcrumbs />

        <div>
          <h1>Friends: </h1>
          <Users url={`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends`} />
        </div>
      </div>
    </BreadcrumbsContext.Provider>
  )
}

export default UserPage