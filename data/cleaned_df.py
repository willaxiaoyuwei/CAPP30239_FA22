import pandas as pd
import numpy as np
import os
import matplotlib.pyplot as plt
import seaborn as sns

path = r'/Users/willawei/Documents/GitHub/CAPP30239_FA22/data'
netflix = 'netflix_titles.csv'

df_nf = pd.read_csv(os.path.join(path, netflix))

#Drop columns we don't need here
#There 
columns_to_drop = ['show_id', 'cast', 'date_added', 'description']
df_dropcol = df_nf.drop(columns_to_drop,axis=1)

#Remove missing value rows
no_missing = df_dropcol.isnull().sum()
total_missing = no_missing.sum()
drop_miss_value = df_dropcol.dropna(axis=1)

#output data
drop_miss_value.to_csv(os.path.join(path,'netflix_clean.csv'), encoding='utf-8', index=False)
