import { Link } from "react-router-dom";
import { CustomButton as Button } from "../form/Button";

export const BackButton = (url: string): JSX.Element => {
    return (
        <Button
            body={<Link to={url}>Go back Home</Link>} 
            loading={false} 
            disabled={false} 
            size={""}
        />
    )
}