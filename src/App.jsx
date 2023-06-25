
import React from 'react'
import NavigationBar from './components/NavigationBar'
import productsection from './components/productsection' 
import contactsection from './components/contactsection'

function App() {
  return (
    <>
    <NavigationBar companyName='Chocolates' ownerName=''Ashfaq Ahmed/>
    <productsection sectionTitle="Brown Chocolate"/>
    <productsection ectionTitle="Black Chocolate"/>
    <contactsection/>
    
    </>
    )
}

export default App