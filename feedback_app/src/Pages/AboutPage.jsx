
import Card from "../components/Shared/Card";
import { Link } from "react-router-dom"

function AboutPage() {

    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>This is a react app to leave feedback for a product or service. </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to={{pathname: "/"}}>Back to Home</Link>
                </p>
            </div>
        </Card>
    )

}

export default AboutPage;