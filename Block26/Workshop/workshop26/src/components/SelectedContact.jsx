import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);
  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSelectedContact(result);
        console.log("result: ", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);

  return selectedContact ? (
    <div>
      <h1>{selectedContact.name}</h1>
      <h3>Address: </h3>
      <p>{selectedContact.address.street}</p>
      <p>{selectedContact.address.suite}</p>
      <p>
        {selectedContact.address.city}, {selectedContact.address.zipcode}
      </p>
      <h4>Website: {selectedContact.website} </h4>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        Back to List
      </button>
    </div>
  ) : (
    <div>An issue occured with data procurement. Please inspect the console.</div>
  );
}
export default SelectedContact;
