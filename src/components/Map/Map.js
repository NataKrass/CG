import React from 'react'
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
} from 'react-simple-maps'
import { Motion, spring } from 'react-motion'
import { geoCircle } from 'd3-geo'
import './Map.scss'

const mapStyles = {
  width: '100%',
  height: 'auto',
}

const circleTallin = [geoCircle().center([26, 59]).radius(2)()]
const circleCape = [geoCircle().center([29, -25]).radius(2)()]
const circleTbilisi = [geoCircle().center([43.4, 42]).radius(2)()]
const circleEustis = [geoCircle().center([-81, 28]).radius(2)()]
const circleBrat = [geoCircle().center([19, 49]).radius(2)()]
const circleVaduz = [geoCircle().center([11, 47.5]).radius(2)()]

const Map = ({ center, isActive }) => (
  <div>
    <Motion
      defaultStyle={{
        x: center[0],
        y: center[1],
      }}
      style={{
        x: spring(center[0]),
        y: spring(center[1]),
      }}
    >
      {({ x, y }) => (
        <ComposableMap
          width={500}
          height={500}
          projection='orthographic'
          projectionConfig={{ scale: 220 }}
          style={mapStyles}
        >
          <ZoomableGlobe center={[x, y]}>
            <circle cx={250} cy={250} r={220} fill='white' stroke='#CFD8DC' />
            <Geographies
              disableOptimization
              geography='https://unpkg.com/world-atlas@1.1.4/world/110m.json'
            >
              {(geographies, proj) =>
                geographies.map((geo, i) => (
                  <Geography
                    key={geo.id + i}
                    geography={geo}
                    projection={proj}
                    style={{
                      default: { fill: '#d4d4d4' },
                    }}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleTallin} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 1 ? 'mark active' : 'vien mark'}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleBrat} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 2 ? 'mark active' : 'mark'}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleCape} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 5 ? 'mark active' : 'mark'}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleTbilisi} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 4 ? 'mark active' : 'mark'}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleVaduz} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 6 ? 'mark active' : 'mark'}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleEustis} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={isActive === 3 ? 'mark active' : 'mark'}
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      )}
    </Motion>
  </div>
)

export default Map
