import classes from "../modules/UserProfile.module.css";

const UserProfile = (props) => {
  return (
    <div className={classes['user-div']}>
      <img style={{height: "200px"}} src={`${props.userData.imageUrl}?v=${props.userData.id}`} />
      <fieldset className={classes['user-info']}>
        <legend>Info</legend>
          <div className={classes['user-info-div']}>
            <strong>{props.userData.prefix}. {props.userData.name} {props.userData.lastName}</strong>
            <em>{props.userData.title}</em>
          </div>
          <div className={classes['user-info-div']}>
            <span><u>Email</u>: {props.userData.email}</span>
            <span><u>Ip Address</u>: {props.userData.ip}</span>
            <span><u>Job Area</u>: {props.userData.jobArea}</span>
            <span><u>Job Type</u>: {props.userData.jobType}</span>
          </div>
      </fieldset>
      <fieldset className={classes['user-address']}>
          <legend>Address</legend>
          
            <strong>{props.userData?.company?.name} {props.userData?.company?.suffix}</strong>
            <span><u>City</u>: {props.userData?.address?.city}</span>
            <span><u>Country</u>: {props.userData?.address?.country}</span>
            <span><u>State</u>: {props.userData?.address?.state}</span>
            <span><u>Street Address</u>: {props.userData?.address?.streetAddress}</span>
            <span><u>ZIP</u>: {props.userData?.address?.zipCode}</span>
      </fieldset>
    </div>
  )
}

export default UserProfile