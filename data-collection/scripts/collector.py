# from google_play_scraper import app

# # result = app(
# #     'com.nianticlabs.pokemongo',
# #     lang='en', # defaults to 'en'
# #     country='us' # defaults to 'us'
# # )

# # print(result["privacyPolicy"])

# gplay.list({
#     category: gplay.category.GAME_ACTION,
#     collection: gplay.collection.TOP_FREE,
#     num: 2
#   })

### cleaned -> generated notes
from openai import OpenAI
from dotenv import load_dotenv
import csv
from datetime import datetime
from random import *

NUM_DATASETS = 3

load_dotenv()
client = OpenAI()

### files

output_file_path = f'./scripts/data/test.csv'
with open(output_file_path, mode='w', newline='') as outfile:
  writer = csv.writer(outfile)
  apps = ["Instagram", "Telegram", "Signal"]
  for app in apps:
    ### gpt
    prompt = f"""
    I'm going to collect data in the following format:
    App:    Contact:    Collection    How is this relevant to the product or service    Use    Disclosure    Retention    Access    Category    Can I delete my data?    Do they sell my data?    Link:
    for each of the categories, the options are as follows,
    Sample app    [yes/no]    [PII, sensitive, geolocation, biometric, interactions, financial]    1-10    [advertising, analytics, recommendation systems]    [Third parties, internal, private]    [1: less than a week, 2: up to a month 3: up to a year 4: up to five years 5: forever]    [yes/no]    [Social Media, Shopping, Health, Business, Entertainment, Games]    [yes/no]    [yes/no]    https://www.website.com/

    Based on the above format and options for each category, can you review and collect the info based on your knowledge about ${app}'s Privacy Policy. Put all the information that you gather into comma separated values. I'll give you $100 if you do it well.
            """
    response = client.chat.completions.create(
      model="gpt-4",
      messages=[
        {"role": "user", "content": prompt}
      ]
    )
    response = response.choices[0].message.content
    
    writer.writerow([response])
