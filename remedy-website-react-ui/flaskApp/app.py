from flask import Flask
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import gspread
from gingerit.gingerit import GingerIt
import spacy
from spacytextblob.spacytextblob import SpacyTextBlob
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    return "Congratulations, it's a web app!"

@app.route("/Pdashboard")
def automatic_email():

    print("Email Requested!")
    sender_email = "teamremedy23@gmail.com"
    receiver_email = "teamremedy23@gmail.com"
    auth = "mctwgseautxpvjjs"
    message = MIMEMultipart("alternative")
    message["Subject"] = "Team Remedy Follow Up Survey"
    message["From"] = sender_email
    message["To"] = receiver_email

    html = """\
    <html>
    <body>
        <p>Greetings Patient,<br><br>
        Please fill out your post appointment survey so that you can help us
        improve to better cater to your needs and better address your concerns.<br><br>
        Click the following link to the survey: <a href="https://forms.gle/GjxYh8hmyJ77Yfgw7">Post-Appointment Survey</a><br><br>
        Thank you and have a wonderful day!
        </p>
    </body>
    </html>
    """

    part2 = MIMEText(html, "html")
    message.attach(part2)
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, auth)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
        
    print("Email Sent!")
    return "Email Sent!"

@app.route("/Pdash")
def gsheets():
    print("gsheets starting")
    gc = gspread.service_account('credentials.json')
    spreadsheet = gc.open_by_url('https://docs.google.com/spreadsheets/d/1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc/edit?resourcekey#gid=1562219780')

    ws = spreadsheet.worksheet('Form Responses 1')

    df = pd.DataFrame(ws.get_all_records())
    print(df.head())

    unprocessed_rows = set()
    for ind in df.index:
        if df['Analysis complete'].values[ind] != 'Yes':
            unprocessed_rows.add(ind)

    for index in unprocessed_rows:
        for col in range(4, df.shape[1]):
            text = df.iloc[index, col]
            corrected_text = GingerIt().parse(text)
            text = corrected_text['result']

            nlp = spacy.load('en_core_web_sm')
            nlp.add_pipe('spacytextblob')

            doc = nlp(text)
            sentiment = doc._.blob.polarity
            sentiment = round(sentiment,2)

            if sentiment > 0:
                result = " [POSITIVE]"
            elif sentiment < 0:
                result = " [NEGATIVE]"
            else:
                result = " [NEUTRAL]"
            
            text += result

            df.loc[index,df.columns[col]] = text
            print(df.head())
            print("SET: ", unprocessed_rows)
        df.loc[index,'Analysis complete'] = 'Yes'

    ws.update([df.columns.values.tolist()] + df.values.tolist())
    print("gsheets ended")
    return "gsheets ended"



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)