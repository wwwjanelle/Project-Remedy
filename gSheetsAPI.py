import gspread
import pandas as pd

gc = gspread.service_account('credentials.json')
spreadsheet = gc.open_by_url('https://docs.google.com/spreadsheets/d/1EmMMQuwTp7buaYPakON1FlcFOJMAgrKKNA0XJwaIHPg/edit#gid=0')

df = pd.DataFrame(spreadsheet.sheet1.get())
print(df.head())
