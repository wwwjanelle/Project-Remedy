import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart




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
        Click the following link to the survey: <a href="https://forms.gle/GjxYh8hmyJ77Yfgw7">Post-Appointment Survey</a><br>
        Thank you and have a wonderful day!
        </p>
    </body>
    </html>
    """


    # Turn these into plain/html MIMEText objects


    part2 = MIMEText(html, "html")
    message.attach(part2)




    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, auth)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
        
    print("Email Sent!")




if __name__ == '__main__':
  automatic_email()
