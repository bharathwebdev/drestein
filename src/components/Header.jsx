import '../components/Header.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Header = () => {
    return (
        <div>
        <div className='head_main'>

<div className='head_left'>

<h1 className='header_h1'>
< span className='h1_change_color c'>Dr</ span>eam D< span className='h1_change_color'>es</ span>ign<br/>
Compe< span className='h1_change_color'>te</ span> W< span className='h1_change_color'>in</ span>
</h1>
<div className='trophy_and_bage' >

<p className='bage'>
13th national level inter collegiate 
technical and management fest

</p>
<img className='trophy' src="trophy.png"/>
</div>
<p className='starts_in'> Starts in <span style={{fontWeight:'bold'}}>12:35:45</span> <span className='timer'><AccessTimeOutlinedIcon sx={{color:'#699BF7',fontSize:'35px'}}/></span></p>
<div className='btns'>
<button className='re_btn_1'>Register</button>
<button className='re_btn_2'>Explore</button>

</div>
<div>
<p className='poweredby'>Powered by</p>
<div>

<img  className='sec_logo' src='sec_logo.png'/>
</div>
<div className='socil_icons'>
 <TwitterIcon sx={{color:'#454545'}}/>
<LinkedInIcon sx={{color:'#454545'}}/>
<FacebookRoundedIcon sx={{color:'#454545'}}/>

<WhatsAppIcon sx={{color:'#454545'}}/>
<InstagramIcon sx={{color:'#454545'}}/>

</div>
</div>

</div>
</div>


        </div>

    )
  }


  export default Header;