import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
     // Define the URL you want to fetch data from
 const apiUrl = '/api/creds';

 // Make the Axios GET request
 axios.get(apiUrl)
   .then((response) => {
     // Handle the successful response here
    console.log(response.data);
   })
   .catch((error) => {
     // Handle any errors here
     console.error('Error fetching data:', error);
   });
  }, []);

  return(<></>)
}

export default App;
