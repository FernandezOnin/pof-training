import Avoid from "../../../assets/images/MicrosoftTeams-image (8).png"
import Clean from "../../../assets/images/MicrosoftTeams-image (9).png"
import Wear from "../../../assets/images/MicrosoftTeams-image (10).png"

const List = () => {
    return (
        <div className="images">
            <a href="/"> <img src={Avoid} alt="Avoid-img" /> Avoid close contact</a>
            <a href="/"> <img src={Clean} alt="Clean-img" /> Clean your hands often</a>
            <a href="/"> <img src={Wear} alt="Wear-img" />Wear a facemask </a>
        </div>
    );
  }
  
  export default List;