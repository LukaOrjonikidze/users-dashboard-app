import { Skeleton } from "@mui/material";
import classes from "../modules/UserCard.module.css";


const UserCardSkeleton = () => {
  return (
    <div style={{width: "1fr", height: "15rem"}} className={classes['user-card']}>
        <Skeleton sx={{width: "100%", height: "100%"}} animation="wave"  variant="rounded" />
        <div className={classes['user-info']}>
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
        </div>
    </div>
  )
}

export default UserCardSkeleton