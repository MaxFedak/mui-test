import { faBriefcase, faCar, faList, faClock, faMapMarkerAlt, faCarSide, faListAlt, faEye, faFolder, faCheckCircle, faExclamationTriangle, faExclamationCircle, faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const tabs = [
    {name: 'All Vehicles', icon: faCar},
    {name: 'Cases', icon: faBriefcase},
    {name: 'Events', icon: faList},
];



export const vehicles = [
  {
    id: 1,
    registration: 'KU22 BBD',
    status: 'In Transit',
    lastUpdated: 'Today 12:00 AM',
    location: '3 Beecham Court Wigan',
    make: 'Ford',
    model: 'Focus',
    cases: [
      { id: 'Case-6324', note: 'Reported a flat tire on M6.', status: 'new' },
    ],
  },
  {
    id: 2,
    registration: 'AB12 CDE',
    status: 'Stationary',
    lastUpdated: 'Today 11:00 AM',
    location: '22 Acacia Avenue, London',
    make: 'BMW',
    model: 'X5',
    cases: [
      { id: 'Case-1123', note: 'Engine overheating issue reported near Baker Street.', status: 'picked' },
      { id: 'Case-1134', note: 'Minor collision with another vehicle in parking lot.', status: 'archived' },
    ],
  },
  {
    id: 3,
    registration: 'XY34 FGH',
    status: 'In Transit',
    lastUpdated: 'Today 09:30 AM',
    location: '56 Maple Street, Manchester',
    make: 'Audi',
    model: 'A6',
    cases: [
      { id: 'Case-7382', note: 'Broken headlight reported after hitting debris.', status: 'new' },
      { id: 'Case-8394', note: 'Windshield cracked by flying stone on highway.', status: 'picked' },
      { id: 'Case-8395', note: 'Reported sudden brake failure near city center.', status: 'archived' },
    ],
  },
  {
    id: 4,
    registration: 'JK56 IJK',
    status: 'Stationary',
    lastUpdated: 'Yesterday 04:00 PM',
    location: '78 Birch Lane, Leeds',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    cases: [],
  },
  {
    id: 5,
    registration: 'LM78 NOP',
    status: 'In Transit',
    lastUpdated: 'Today 01:15 PM',
    location: '90 Elm Street, Birmingham',
    make: 'Volkswagen',
    model: 'Golf',
    cases: [
      { id: 'Case-9501', note: 'Fuel leak reported after refueling.', status: 'new' },
      { id: 'Case-9502', note: 'Engine misfire reported on motorway.', status: 'picked' },
      { id: 'Case-9503', note: 'Rear-end collision with another vehicle at traffic light.', status: 'archived' },
      { id: 'Case-9504', note: 'Airbag deployment during minor accident.', status: 'new' },
    ],
  },
  {
    id: 6,
    registration: 'QR90 STU',
    status: 'Stationary',
    lastUpdated: 'Today 03:45 PM',
    location: '123 Oak Road, Bristol',
    make: 'Toyota',
    model: 'Camry',
    cases: [
      { id: 'Case-1073', note: 'Reported unusual noise from the engine.', status: 'picked' },
      { id: 'Case-1074', note: 'Reported oil spill near vehicle after parking.', status: 'new' },
      { id: 'Case-1075', note: 'Lost control and skidded on wet road.', status: 'archived' },
      { id: 'Case-1076', note: 'Battery drained completely, unable to start.', status: 'picked' },
      { id: 'Case-1077', note: 'Minor fire in the engine compartment.', status: 'new' },
    ],
  },
  {
    id: 7,
    registration: 'UV12 WXY',
    status: 'In Transit',
    lastUpdated: 'Today 08:30 AM',
    location: '45 Pine Street, Liverpool',
    make: 'Nissan',
    model: 'Altima',
    cases: [
      { id: 'Case-2081', note: 'Flat tire reported on highway.', status: 'new' },
    ],
  },
  {
    id: 8,
    registration: 'ZA34 BCD',
    status: 'Stationary',
    lastUpdated: 'Today 10:00 AM',
    location: '67 Spruce Road, Glasgow',
    make: 'Chevrolet',
    model: 'Malibu',
    cases: [
      { id: 'Case-3192', note: 'Battery dead, vehicle not starting.', status: 'picked' },
    ],
  },
  {
    id: 9,
    registration: 'EF56 GHI',
    status: 'In Transit',
    lastUpdated: 'Yesterday 02:15 PM',
    location: '89 Willow Drive, Sheffield',
    make: 'Honda',
    model: 'Civic',
    cases: [
      { id: 'Case-4203', note: 'Reported a strange noise from the engine.', status: 'new' },
      { id: 'Case-4204', note: 'Oil leak detected in engine compartment.', status: 'picked' },
    ],
  },
  {
    id: 10,
    registration: 'JK78 LMN',
    status: 'Stationary',
    lastUpdated: 'Today 06:00 PM',
    location: '23 Chestnut Street, Edinburgh',
    make: 'Hyundai',
    model: 'Sonata',
    cases: [],
  },
  {
    id: 11,
    registration: 'OP90 QRS',
    status: 'In Transit',
    lastUpdated: 'Today 09:00 AM',
    location: '12 Cedar Avenue, Nottingham',
    make: 'Kia',
    model: 'Optima',
    cases: [
      { id: 'Case-5314', note: 'Rear-ended another vehicle.', status: 'archived' },
    ],
  },
  {
    id: 12,
    registration: 'TU12 VWX',
    status: 'Stationary',
    lastUpdated: 'Yesterday 03:30 PM',
    location: '34 Elmwood Road, Belfast',
    make: 'Mazda',
    model: '6',
    cases: [
      { id: 'Case-6425', note: 'Engine overheating.', status: 'picked' },
    ],
  },
  {
    id: 13,
    registration: 'YZ34 ABC',
    status: 'In Transit',
    lastUpdated: 'Today 10:45 AM',
    location: '56 Fir Street, Cardiff',
    make: 'Mazda',
    model: 'M3',
    cases: [
      { id: 'Case-7536', note: 'Brake failure reported.', status: 'new' },
      { id: 'Case-7537', note: 'Windshield cracked.', status: 'picked' },
    ],
  },
  {
    id: 14,
    registration: 'DE56 FGH',
    status: 'Stationary',
    lastUpdated: 'Today 11:30 AM',
    location: '78 Aspen Way, Newcastle',
    make: 'Lexus',
    model: 'RX',
    cases: [],
  },
  {
    id: 15,
    registration: 'HI78 JKL',
    status: 'In Transit',
    lastUpdated: 'Today 02:00 PM',
    location: '90 Alder Lane, Swansea',
    make: 'Tesla',
    model: 'Model 3',
    cases: [
      { id: 'Case-8647', note: 'Battery charging issue.', status: 'new' },
      { id: 'Case-8648', note: 'Tire puncture.', status: 'picked' },
    ],
  },
  {
    id: 16,
    registration: 'MN90 OPQ',
    status: 'Stationary',
    lastUpdated: 'Today 01:45 PM',
    location: '101 Beech Road, Aberdeen',
    make: 'Volvo',
    model: 'XC90',
    cases: [
      { id: 'Case-9758', note: 'Engine oil change needed.', status: 'new' },
    ],
  },
  {
    id: 17,
    registration: 'RS12 TUV',
    status: 'In Transit',
    lastUpdated: 'Today 03:00 PM',
    location: '123 Birch Street, Dundee',
    make: 'Jeep',
    model: 'Cherokee',
    cases: [
      { id: 'Case-0869', note: 'Suspension issue reported.', status: 'picked' },
      { id: 'Case-0870', note: 'Transmission fluid leak.', status: 'archived' },
    ],
  },
  {
    id: 18,
    registration: 'WX34 YZA',
    status: 'Stationary',
    lastUpdated: 'Yesterday 05:15 PM',
    location: '145 Cedar Lane, Inverness',
    make: 'Jaguar',
    model: 'XF',
    cases: [
      { id: 'Case-1971', note: 'Brake pads replacement needed.', status: 'new' },
      { id: 'Case-1972', note: 'Headlight malfunction.', status: 'picked' },
    ],
  },
  {
    id: 19,
    registration: 'BC56 DEF',
    status: 'In Transit',
    lastUpdated: 'Today 04:30 PM',
    location: '167 Maple Avenue, Stirling',
    make: 'Ford',
    model: 'Golf',
    cases: [
      { id: 'Case-3082', note: 'Air conditioning failure.', status: 'new' },
      { id: 'Case-3083', note: 'Tire pressure monitoring system issue.', status: 'picked' },
      { id: 'Case-3084', note: 'Electrical wiring problem.', status: 'archived' },
    ],
  },
  {
    id: 20,
    registration: 'GH78 IJK',
    status: 'Stationary',
    lastUpdated: 'Today 07:00 PM',
    location: '189 Pine Lane, Glasgow',
    make: 'Porsche',
    model: 'Cayenne',
    cases: [
      { id: 'Case-4193', note: 'Fuel pump failure.', status: 'new' },
      { id: 'Case-4194', note: 'Navigation system error.', status: 'picked' },
    ],
  },
];

  
export const headers = [
    { text: "Registration", icon: faCar },
    { text: "Vehicle Status", icon: faExclamationCircle },
    { text: "Last Updated", icon: faClock },
    { text: "Location", icon: faMapMarkerAlt },
    { text: "Make", icon: faCarSide },
    { text: "Model", icon: faListAlt },
    { text: "View in Fleetsmart", icon: faEye },
    { text: "Cases", icon: faFolder }
  ];
 
  export const columns = [
    { field: 'registration', headerName: <span><FontAwesomeIcon icon={faCar} /> Registration</span>, minWidth: 150, flex: 1 },
    { field: 'status', headerName: <span><FontAwesomeIcon icon={faExclamationCircle} /> Vehicle Status</span>, minWidth: 150, flex: 1 },
    { field: 'lastUpdated', headerName: <span><FontAwesomeIcon icon={faClock} /> Last Updated</span>, minWidth: 150, flex: 1 },
    { field: 'location', headerName: <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</span>, minWidth: 150, flex: 1 },
    { field: 'make', headerName: <span><FontAwesomeIcon icon={faCarSide} /> Make</span>, minWidth: 150, flex: 1 },
    { field: 'model', headerName: <span><FontAwesomeIcon icon={faListAlt} /> Model</span>, minWidth: 150, flex: 1 },
    {
      field: 'cases',
      headerName: <span><FontAwesomeIcon icon={faFolder} /> Cases</span>, minWidth: 150, flex: 1,
      renderCell: (params) => {
        const caseCount = params.value.length;
        if (caseCount === 0) {
          return (
            <div>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> All Good
            </div>
          );
        } else if (caseCount > 0 && caseCount < 3) {
          return (
            <div>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'orange' }} /> {caseCount} Cases
            </div>
          );
        } else {
          return (
            <div>
              <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'red' }} /> {caseCount} Cases
            </div>
          );
        }
      },
    },
];