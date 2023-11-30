import pandas as pd
import ast

# Linking to read from csv
colors = pd.read_csv('./datasets/colors.csv')
subject = pd.read_csv('./datasets/subject.csv')
dates = pd.read_fwf('./datasets/dates.txt',
                    header = None)

# Split data, only after first occurrence of '" '
dates[['Title', 'Date']] = dates[0].str.extract(r'"(.*?)" \((.*?)\)')

# Add  separate column for month
dates['Month'] = dates['Date'].str.extract(r'(\w+) \d+, \d+')

# Remove extra column
del dates[0]

# Remove unnamed column
del colors['Unnamed: 0']

# Renaming columns to a common name 'Title' for consistency
dates.rename(columns={'Title': 'Title'}, inplace=True)
subject.rename(columns={'TITLE': 'Title'}, inplace=True)
colors.rename(columns={'painting_title': 'Title'}, inplace=True)

# Standardize content of common column to title case
dates['Title'] = dates['Title'].str.title()
subject['Title'] = subject['Title'].str.title()
colors['Title'] = colors['Title'].str.title()

# Remove quotes from 'Title' for consistency before merging
subject['Title'] = subject['Title'].str.replace('"', '')

# Merging based on the standardized common column 'Title'
merged = pd.merge(dates, colors, on='Title')
merged = pd.merge(merged, subject, on='Title')

# Convert string representation of lists to actual lists
merged['colors'] = merged['colors'].apply(ast.literal_eval)

# Replace the '\r\n' in the lists
merged['colors'] = merged['colors'].apply(lambda x: [color.replace('\r\n', '') for color in x])

# Save to CSV
merged.to_csv('bob_rocks.csv')
