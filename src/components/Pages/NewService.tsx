import { Box } from "@mui/material"

const NewService = () => {
  return (
    <>
      <div className="page-name">
        <Box sx={{ flexGrow: 1 }}>
          <strong>&gt; Initialize a new service</strong>
        </Box>
      </div>
      <div>
        <p>This proceduce will guide you in each step needed to configure a new Sensor Observation Service.</p>
        <p>Please follow the setup instruction to start using it.</p>
      </div>
      <div className="button-container">
        <button className="submit-button">Next</button>
      </div>
    </>
  )
}

export default NewService