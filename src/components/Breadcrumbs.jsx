import { Breadcrumbs as BreadcrumbsMUI } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom";
import BreadCrumbsContext from "../context/BreadcrumbsContext";

const Breadcrumbs = () => {
    const context = useContext(BreadCrumbsContext);
    

    return (
      <BreadcrumbsMUI separator=">" aria-label="breadcrumb">
        {context.users.map((user, i) => (
          <Link to={user.url}>{user.name}</Link>
        ))}
      </BreadcrumbsMUI>
    )
}

export default Breadcrumbs