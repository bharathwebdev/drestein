import React from "react"
import '../components/main.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Nav_bar() {
  return (



    <div className="nav">

      <div className="logo_head">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pgv6divvgkf-38%3A19?alt=media&token=3fab6dac-2519-4a09-ae7c-90218004e02e"
          alt="Not Found"
          className="logo-bgremove"
        />
        <div className="event-logo">
          <p className="txt-297 flex-hcenter">DRESTEIN</p>
          <p className="txt-384 flex-hcenter">2 0 2 2</p>

      </div>

      </div>
      <div className="nav_links">

        <div className="nav-item flex-row-vstart-hstart">
          <p className="txt-453 flex-hcenter">HOME</p>
        </div>
        <div className="nav-item flex-row-vstart-hstart">
          <p className="txt-453 flex-hcenter">EVENTS</p>
        </div>
      
      <div className="nav-item-2 flex-row-vstart-hstart">
        <p className="txt-453 flex-hcenter">ABOUT</p>
      </div>
      </div>
      <div className="menu_icon">

      <MenuOutlinedIcon  sx={{color:'black',fontSize:'40px'}} />
      </div>



    </div>

  )
}
