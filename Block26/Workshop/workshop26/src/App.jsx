import './App.css'
import { useState } from "react";
import ContactList from './components/ContactList'
import setSelectedContactId from './components/SelectedContact';



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}

export default App
