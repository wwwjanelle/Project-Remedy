import gspread
import pandas as pd

gc = gspread.service_account('credentials.json') #credentials.json is currently untracked in this repo
spreadsheet = gc.open_by_url('https://docs.google.com/spreadsheets/d/1EmMMQuwTp7buaYPakON1FlcFOJMAgrKKNA0XJwaIHPg/edit#gid=0')

print(spreadsheet.sheet1.get())