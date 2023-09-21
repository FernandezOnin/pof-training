import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Usa from "../../../assets/images/images.jpg"

function Countries() {
    return (
      <div className="countries">
        <img src={Usa} alt="text" width = "50" height = "50"/> USA <ArrowDropDownIcon/>
      </div>
    );
  }
  
  export default Countries;