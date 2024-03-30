import { Link } from '@mui/material';
import about from "../../assets/about_grey.svg";
const IconTray = () => {
    return (
        <div className="container-icon-tray">
            <div className="sub-menu-item">
                <Link href="/about" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>About IstSos</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/status" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Status</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/database" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Database</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/serviceprovider" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Service Provider</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/serviceidentification" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Service identification</div>
                </Link>
            </div>
                     <div className="sub-menu-item">
                <Link href="/coordinatessystem" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Coordinates system</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/mqtt" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>MQTT Publisher</div>
                </Link>
            </div>
                     <div className="sub-menu-item">
                <Link href="/observationconfig" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>GetObservation Configuration</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/proxyconfig" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Proxy Configuration</div>
                </Link>
            </div>
                    <div className="sub-menu-item">
                <Link href="/newservice" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>New Service</div>
                </Link>
            </div>
            <div className="sub-menu-item">
                <Link href="/deleteservice" underline="none" color="inherit">
                    <img src={about} />
                    <div className='sub-menu-item-label'>Delete Service</div>
                </Link>
            </div>
        </div>
    )
}

export default IconTray