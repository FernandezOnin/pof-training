import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';

function Bottom() {
    return (
      <div className= "bottom-nav">
        <button ><HomeIcon sx={{fontSize:30, color:"#fff" }} /> </button>
        <button><AssessmentIcon sx={{fontSize:30, color:"#aeb1d8"}}/></button>
        <button><ListAltIcon sx={{fontSize:30, color:"#aeb1d8"}}/></button>
        <button><InfoIcon sx={{fontSize:30, color:"#aeb1d8"}}/></button>
      </div>
    );
  }
  
  export default Bottom;