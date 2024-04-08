import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import doctorsData from '../../data/doctors.json'; // Import the JSON data

const CardComponent = () => (
  <Card.Group className="ui link cards">
    {doctorsData.map(doctor => (
      <Card className="card" key={doctor.id}>
        {/* Update src attribute to use doctor_image from the JSON */}
        <Image src={`${process.env.PUBLIC_URL}/${doctor.doctor_image}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{doctor.doctor_name}</Card.Header>
          <Card.Meta>
            <span className='date'>{doctor.specialty}</span>
          </Card.Meta>
          <Card.Description>
            {doctor.description}
          </Card.Description>
        </Card.Content>
        {/* Additional content here if needed */}
      </Card>
    ))}
  </Card.Group>
);

export default CardComponent;

