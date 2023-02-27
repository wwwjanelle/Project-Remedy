import gspread
from gingerit.gingerit import GingerIt
import spacy
from spacytextblob.spacytextblob import SpacyTextBlob
import pandas as pd

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