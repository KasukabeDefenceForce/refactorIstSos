
const About = () => {
  return (
    <>
      <div className="page-name"><strong>default &gt; About istSOS</strong></div>
      <div className="container">
        <div className="about">
          <div className="floating-label">istSoS</div>
          <div className="two-column-row">
            <div className="column1">Version:</div>
            <div className="column2">2.4.2</div>
          </div>
          <div className="two-column-row">
            <div className="column1">Download:</div>
            <div className="column2"><a href="https://sourceforge.net/projects/istsos
">https://sourceforge.net/projects/istsos
            </a></div>
          </div>
        </div>
        <p>istSOS (Istituto Scienze della Terra Sensor Observation Service) is an implementation of the Sensor Observation Service standard from Open Geospatial Consortium.</p>
        <p> The developement of istSOS has started in 2009 in order to provide a simple implementation of the SOS standard for the management, provision and integration of hydro-meteorological data collected in Canton Ticino (Switzerland).</p>
        <p>istSOS is entirely written in <a href="https://www.python.org/">Python</a> and is based on: </p>
        <ul>
          <li>
            <a href="https://www.postgresql.org/">PostgreSQL</a> / <a href="http://www.refractions.net/products/postgis/">PostGIS</a>
          </li>
          <li>
            <a href="https://www.apache.org/">Apache</a> / <a href="https://code.google.com/archive/p/modwsgi/">mod_wsgi</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default About