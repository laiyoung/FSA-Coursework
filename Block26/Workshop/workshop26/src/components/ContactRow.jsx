import React from "react";
import SelectedContact from "./SelectedContact";

function ContactRow({ selectedContactId, contact }) {

  return (

    <tr
      onClick={() => {
        selectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
export default ContactRow;
