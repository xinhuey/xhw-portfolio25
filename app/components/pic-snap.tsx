import {Col} from "react-bootstrap";

export const PicSnaps = ({title, date, location, imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className ="proj-imgbx">
                <img src={imgUrl} />
                <div className = "proj-txtx">
                    <h4>{title}</h4>
                    <p>{date}</p>
                    <p>{location}</p>
                </div>
            </div>
        </Col>
    )
}