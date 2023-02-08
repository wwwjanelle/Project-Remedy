from gingerit.gingerit import GingerIt
import spacy
from spacytextblob.spacytextblob import SpacyTextBlob
import pandas as pd



text = input("Enter text >>: ")
corrected_text = GingerIt().parse(text)
text = corrected_text['result']
print(text)

nlp = spacy.load('en_core_web_sm')
nlp.add_pipe('spacytextblob')

doc = nlp(text)
sentiment = doc._.blob.polarity
print(sentiment)
sentiment = round(sentiment,2)
print(sentiment)

if sentiment > 0:
  print("positive")
elif sentiment < 0:
  print("negative")
else:
  print("neutral")
