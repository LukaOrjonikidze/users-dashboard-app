import Users from '../components/Users'
import classes from "../modules/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes['home-page']}>
        <Users url="http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"/>
    </div>
  )
}

export default HomePage