import React from "react";

const Appointment = ({
  customer: { firstName, lastName, phoneNumber, stylist, service, notes },
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th> First Name</th>
            <th> Last Name </th>
            <th> Phone Number </th>
            <th> Stylist </th>
            <th> Service </th>
            <th> Notes </th>
          </tr>
        </thead>
        <tbody>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{phoneNumber}</td>
          <td>{stylist}</td>
          <td>{service}</td>
          <td>{notes}</td>
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;
