import './App.css'
import { useState } from "react";
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <SelectedContact />
      ) : (
        <ContactList />
      )}
    </>
  );
}

export default App
