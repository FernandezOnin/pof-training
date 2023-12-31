import Countries from "./countries";
import CallIcon from '@mui/icons-material/Call';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const Contacts = () => {
    return (
        <div>
            <div className="home-container-1">
                <div><b>Covid-19</b></div>
                <Countries/>
            </div>
            <div className="home-container-2">
                <div>Are you feeling sick?</div>
                <div>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</div>
                <div>
                    <div><CallIcon/> Call Now</div>
                    <div><ForumRoundedIcon/>Send SMS</div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Contacts;