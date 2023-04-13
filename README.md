# Project-Remedy

To run app:
- Have 2 seperate terminals, one for flask and one to run react.
- You will probably have to install flask the first time you run the app.

- Flask terminal commands:  
    - delete the current "venv" folder IF you just cloned the repo
    - run `python3 -m venv venv`
    - run `source venv/bin/activate`
    - if you haven't already `pip3 install flask` or however you can install flask
    - run `flask run`
        - if it says port 5000 is already in use, quit/close your editor and open it again then run the commands
    - run `deactivate` to close the virtual environment 


STEPS TO RUN THE WEBSITE:

cd remedy-website-react-ui<br>
npm config set legacy-peer-deps true<br>
npm i<br>

npm start
- React commands:
    - run `npm start`

- Installations:
    - `pip3 install flask`
    - `pip3 install gingerit`
    - `pip3 install gspread`
    - `pip3 install -U pip setuptools wheel`
    - `pip3 install -U spacy`
    - `pip3 install spacytextblob`
    - `python3 -m spacy download en_core_web_sm`
        <!-- - `python3 -m spacy download en_core_web_lg`
        - `python3 -m spacy link en_core_web_lg en` -->


