import React, { useState, useEffect } from "react";
import axios from "axios";
import {gapi} from "gapi-script";

function SheetData() {
  const [data, setData] = useState([]);

  const sendEmail = () => {};

  // const authenticate = () => {
  //   return gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }

  // const loadClient = () => {
  //   gapi.client.setApiKey("AIzaSyDE1L0fOtuAJkdIXkDCBcy_6rW6NbVXmio");
  //   return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  
  // const execute = () => {
  //   return gapi.client.sheets.spreadsheets.values.get({
  //     "spreadsheetId": "1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc",
  //     "range": "A1:B6",
  //     "majorDimension": "ROWS"
  //   })
  //       .then(function(response) {
  //               // Handle the results here (response.result has the parsed body).
  //               console.log("Response", response);
  //               setData(response.result.values)
  //             },
  //             function(err) { console.error("Execute error", err); });
  // }
  // gapi.load("client:auth2", function() {
  //   gapi.auth2.init({client_id: "482072315280-797g20hvf4pjakl2mmhit2uaoqjqnojb.apps.googleusercontent.com"});
  // });

  useEffect(() => {
    const fetchData = async () => {
        
        let sheetId = "1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc"
        const response = await axios.get(
        "https://sheets.googleapis.com/v4/spreadsheets/1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc/values/B2%3AC50?majorDimension=ROWS&key=AIzaSyDE1L0fOtuAJkdIXkDCBcy_6rW6NbVXmio"
      );
        console.log("Response", response);
        setData(response.data.values);
    };
    fetchData();
    // authenticate().then(loadClient).then(execute);
    console.log("DATA from sheets ", data);
  }, []);

  return (
    <div>
      <h1>Sheet Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>{row[1]}</td>
              <td>{row[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SheetData;


// GET https://sheets.googleapis.com/v4/spreadsheets/1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc/values/A1%3AB6?majorDimension=ROWS&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


{/* <script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for sheets.spreadsheets.values.get
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
    */}

  {/* function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  } */}
  
  {/* function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  } */}

  {/* // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.sheets.spreadsheets.values.get({
      "spreadsheetId": "1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc",
      "range": "A1:B6",
      "majorDimension": "ROWS"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
   */}
// </script>
// <button onclick="authenticate().then(loadClient)">authorize and load</button>
// <button onclick="execute()">execute</button>

