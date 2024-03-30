import { Box } from "@mui/material"
import { useState } from "react"
import InputBoxComponent from "./InputBoxComponent"

const ServiceProvider = () => {
    const [name, setName] = useState('Istitute Of Earth Science - SUPSI')
    const [website, setWebsite] = useState("http://www.supsi.ch/ist")
    const [contactName, setContactName] = useState("Team Geomatica");
    const [position, setPosition] = useState("Geomatics division");
    const[voice, setVoice] = useState(+41586666200)
    const [faxNumber, setFaxNumber] = useState(+41586666209);
    const [email, setEmail] = useState("geoservice@supsi.ch");
    const [address, setAddress] = useState("Via Flora Ruchat-Roncati 15");
    const [postalCode, setPostalCode] = useState(6850);
    const [city, setCity] = useState("Mendrisio");
    const [state, setState] = useState("Canton Ticino");
    const [country, setCountry] = useState("Switzerland");

    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const sanitizedMessage = `
      Website: ${website}
      Contact Name: ${contactName}
      Position: ${position}
      Fax Number: ${faxNumber}
      Email: ${email}
      Address: ${address}
      Postal Code: ${postalCode}
      City: ${city}
      State: ${state}
      Country: ${country}
    `;
        alert(sanitizedMessage);
    };

    return (
        <>
            <div className="page-name">
                <Box sx={{ flexGrow: 1 }}>
                    <strong>default &gt; Service Provider</strong>
                </Box>
            </div>
            <div className="about">
                <div className="floating-label">Service Provider</div>
                <form onSubmit={handleClick}>
                    <InputBoxComponent label="Name" type="text" setValue={setName} value={name} />
                    <InputBoxComponent label="Website" type="text" setValue={setWebsite} value={website} />
                    <InputBoxComponent label="Contact Name" type="text" setValue={setContactName} value={contactName} />
                    <InputBoxComponent label="Contact position" type="text" setValue={setPosition} value={position} />
                    <InputBoxComponent label="Voice" type="tel" setValue={setVoice} value={voice} />
                    <InputBoxComponent label="Fax" type="tel" setValue={setFaxNumber} value={faxNumber} />
                    <InputBoxComponent label="Email" type="email" setValue={setEmail} value={email} />
                    <InputBoxComponent label="Address" type="text" setValue={setAddress} value={address} />
                    <InputBoxComponent label="Postal Code" type="text" setValue={setPostalCode} value={postalCode} />
                    <InputBoxComponent label="City" type="text" setValue={setCity} value={city} />
                    <InputBoxComponent label="State" type="text" setValue={setState} value={state} />
                    <InputBoxComponent label="Country" type="text" setValue={setCountry} value={country} />
                    <div className="button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ServiceProvider