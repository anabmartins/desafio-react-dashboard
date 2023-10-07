import './styles.css'
//sidebar
import { NavLink } from 'react-router-dom';
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export function SideBar() {

    return (
        <>
            <div className="sidebar">
                <div className="option">
                    <button><KeyboardDoubleArrowRightIcon /></button>
                </div>

                <NavLink to="/">
                    <div className="option">
                        <HomeOutlinedIcon />
                    </div>
                </NavLink>

                <NavLink to="/agend">
                    <div className="option">
                        <InsertInvitationOutlinedIcon />
                    </div>
                </NavLink>

                <NavLink to="/manage">
                    <div className="option">
                        <HealthAndSafetyOutlinedIcon />
                    </div>
                </NavLink>

            </div>
        </>
    )
}