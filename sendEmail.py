# import os
# import random
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def automatic_email():
    # user = input("Enter Your Name >>: ")
    # email = input("Enter Your Email >>: ")
    # msg = """\
    # Hi there

    # This message is a test."""
    # message = (f"Dear {user}, Did you get this?") 
    # s = smtplib.SMTP('smtp.gmail.com', 587)
    # s.starttls()
    # s.login("SENDER EMAIL", "GOOGLE APP PASSWORD")
    # s.sendmail('&&&&&&&&&&&', email, message)
    # # sendmail(sender_email, receiver_email, message)

    sender_email = "FROM"
    receiver_email = "TO"
    password = input("Type your password and press enter: ") #GOOGLE APP PASSWORD

    message = MIMEMultipart("alternative")
    message["Subject"] = "SUBJECT LINE"
    message["From"] = sender_email
    message["To"] = receiver_email
    text = """\
    Hi there

    This message is a test."""
    html = """?"""
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    message.attach(part1)
    message.attach(part2)

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        # has to be 465 to work
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )

    print("Email Sent!") 

if __name__ == '__main__':
    automatic_email()