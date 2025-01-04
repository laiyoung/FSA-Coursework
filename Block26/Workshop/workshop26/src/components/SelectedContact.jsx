import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SelectedContact() {
  const [selectedContactId, setContacts] = useState(selectedContactId);
  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">{Name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>Phone</td>
          <td>Address</td>
          <td>Company</td>
        </tr>
      </tbody>
    </table>
  );
}
export default SelectedContact;
