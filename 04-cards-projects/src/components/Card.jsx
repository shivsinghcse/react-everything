import "./card.css";

const Card = (props) => {
    const {logo, companyName, posted, designation, tags, salary, location} = props.data;
    // console.log(props.data.logo);
    return(
        <>
            <div className="card">
                <div className="header">
                    <img className="company-logo" src={logo} />
                    <button className="save-btn">Save<i className="ri-bookmark-line" style={{marginLeft: "0.2rem", fontSize: "0.9rem"}}></i></button>
                </div>
                <div className="main">
                    <h3 className="company">{companyName[0].toUpperCase()+companyName.slice(1)}<span>{posted} days ago</span></h3>
                    <h2 className="job-title">{designation.split(" ").map((ele) => ele[0].toUpperCase()+ele.slice(1)).join(" ")}</h2>
                    <button className="tags">{tags[0].split(" ").map((ele) => ele[0].toUpperCase()+ele.slice(1)).join("-")}</button>
                    <button className="tags">{tags[1].split(" ").map((ele) => ele[0].toUpperCase()+ele.slice(1)).join(" ")}</button>
                </div>
                <div className="footer">
                    <div>
                        <h3 className="salary">{salary}</h3>
                        <p className="location">{`${location.city}, ${location.country}`}</p>
                    </div>
                    <div>
                        <button className="apply-btn">Apply now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;