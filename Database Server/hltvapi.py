# Taken from https://github.com/alperkaganavci/HLTV-Match-API

import requests
import os
import json
import time
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
from tqdm import tqdm
# This is code that pulls the packages and etc that is needed

matchlinks = []
matchdates = []
matchclocks = []
matcheventnames = []
teamlogos = []
matchbestof = []
matchstatus = []
teamnames = []
match = {'matches': []}
# these will be all my arrays of information

if os.path.isfile(os.getcwd() + '/match.json'):
    os.remove(os.getcwd() + '/match.json')
else:
    pass


# rest of functions self explanatory based off names
def get_source(link):
    r = requests.get(link)
    soup = BeautifulSoup(r.content, 'lxml')
    return soup

def upcomingmatches():
    matchlinks_um = []
    soup = get_source('https://hltv.org/matches')
    today = datetime.today()
    for links in soup.find(class_="standard-headline", text=(str(today)[:10])).find_parent().find_all(
            class_="upcoming-match"):
        matchlinks_um.append('https://hltv.org' + links.get('href'))
        matchlinks.append('https://hltv.org' + links.get('href'))
    for x in tqdm(range(len(matchlinks_um))):
        soup = get_source(matchlinks_um[x])
        time_class = soup.find('div', class_='time')['data-unix']
        realtimeclock = datetime.fromtimestamp(int(time_class[:10])).time()
        if realtimeclock != '00:00:00':
            matchclocks.append(realtimeclock)
        for tn in soup.find_all('div', class_='teamName'):
            teamnames.append(tn.text)
        matchdate = soup.find('div', class_='date').text
        matchdates.append(matchdate)
        eventname = soup.find('div', class_='event text-ellipsis').text
        matcheventnames.append(eventname)
        for lg in soup.find_all('img', class_='logo'):
            teamlogos.append(lg.get('src'))
        maps = soup.find('div', class_='standard-box veto-box').find(class_='padding preformatted-text').text
        if maps.startswith('Best'):
            matchbestof.append(maps[:9])
        else:
            matchbestof.append(maps[:12])
        matchstatus.append('UPCOMING')
        time.sleep(0.01)
    return len(matchlinks_um)

def livematches():
    matchlinks_lm = []
    soup = get_source('https://hltv.org/matches')
    control = soup.find(class_='live-matches')
    if control is not None:
        for links in soup.find(class_='live-matches').find_all('a'):
            matchlinks_lm.append('https://hltv.org' + links.get('href'))
            matchlinks.append('https://hltv.org' + links.get('href'))
        for x in tqdm(range(len(matchlinks_lm))):
            soup = get_source(matchlinks_lm[x])
            time_class = soup.find('div', class_='time')['data-unix']
            realtimeclock = datetime.fromtimestamp(int(time_class[:10])).time()
            matchclocks.append(realtimeclock)
            for tn in soup.find_all('div', class_='teamName'):
                teamnames.append(tn.text)
            matchdate = soup.find('div', class_='date').text
            matchdates.append(matchdate)
            eventname = soup.find('div', class_='event text-ellipsis').text
            matcheventnames.append(eventname)
            for lg in soup.find_all('img', class_='logo'):
                teamlogos.append(lg.get('src'))
            maps = soup.find('div', class_='standard-box veto-box').find(class_='padding preformatted-text').text
            if maps.startswith('Best'):
                matchbestof.append(maps[:9])
            else:
                matchbestof.append(maps[:12])
            matchstatus.append('LIVE')
            time.sleep(0.01)
    return len(matchlinks_lm)
def results():
    matchlinks_rs = []
    soup = get_source('https://hltv.org/results')
    now = datetime.now()
    month = datetime.strftime(now, '%B')
    today = datetime.strftime(now, '%d')
    yesterday = datetime.strftime(now + timedelta(-1), '%d')
    year = datetime.strftime(now, '%Y')
    check = [month, today, year]
    resultdates = []

    for tddate in soup.find_all(class_='standard-headline'):
        headline = str(tddate.text).split()
        if len(headline) != 5:
            continue
        mnth = headline[2]
        tdy = headline[3][:-2]
        yr = headline[4]
        checkmdl = [mnth, tdy, yr]
        if check == checkmdl:
            resultdates.append(tddate.text)
            break
        else:
            continue
    for yddate in soup.find_all(class_='standard-headline'):
        check = [month, yesterday, year]
        headline = str(yddate.text).split()
        if len(headline) != 5:
            continue
        mnth = headline[2]
        ydy = headline[3][:-2]
        yr = headline[4]
        checkmdl = [mnth, ydy, yr]
        if check == checkmdl:
            resultdates.append(yddate.text)
            break
        else:
            continue
    for nm in range(len(resultdates)):
        for links in soup.find(class_='standard-headline', text=(resultdates[nm])).find_parent().find_all(
                class_='a-reset'):
            matchlinks_rs.append('https://hltv.org' + links.get('href'))
            matchlinks.append('https://hltv.org' + links.get('href'))
    for x in tqdm(range(len(matchlinks_rs))):
        soup = get_source(matchlinks_rs[x])
        time_class = soup.find('div', class_='time')['data-unix']
        realtimeclock = datetime.fromtimestamp(int(time_class[:10])).time()
        matchclocks.append(realtimeclock)
        for tn in soup.find_all('div', class_='teamName'):
            teamnames.append(tn.text)
        matchdate = soup.find('div', class_='date').text
        matchdates.append(matchdate)
        eventname = soup.find('div', class_='event text-ellipsis').text
        matcheventnames.append(eventname)
        for lg in soup.find_all('img', class_='logo'):
            teamlogos.append(lg.get('src'))
        maps = soup.find('div', class_='standard-box veto-box').find(class_='padding preformatted-text').text
        if maps.startswith('Best'):
            matchbestof.append(maps[:9])
        else:
            matchbestof.append(maps[:12])
        matchstatus.append('FINISHED')
        time.sleep(0.01)

print('Upcoming matches are getting pulled.')
upcomingmatches()
time.sleep(1)
print('Live matches are getting pulled.')
livematches()
time.sleep(1)
print('Results are getting pulled.')
results()
time.sleep(1)
print('Matches are being written.')
time.sleep(1)


teamA = teamnames[0::2]
teamB = teamnames[1::2]
for n in range(len(matchlinks)):
    print(teamA[n], 'vs', teamB[n], 'on', matchdates[n], 'at', matcheventnames[n], matchclocks[n], matchstatus[n])

teamAlogo = teamlogos[0::2]
teamBlogo = teamlogos[1::2]


for dn in range(len(matchlinks)):

    match['matches'].append({
        'team1': str(teamA[dn]),
        'team2': str(teamB[dn]),
        'eventname': str(matcheventnames[dn]),
        'date': str(matchdates[dn]),
        'clock': str(matchclocks[dn]),
        'bo': str(matchbestof[dn]),
        'status': str(matchstatus[dn]),
        'team1logo': str(teamAlogo[dn]),
        'team2logo': str(teamBlogo[dn])
    })
dump = json.dumps(match, indent=2)
with open(os.getcwd() + '/match.json', 'a') as f:
    f.write(dump)
