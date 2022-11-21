import os
import pandas as pd
import matplotlib.pyplot as plt
import geopandas
import pandas_datareader.data as web
from mpl_toolkits.axes_grid1 import make_axes_locatable
import us
import datetime as dt

path = r'/Users/willawei/Documents/GitHub/CAPP30239_FA22/final project'

## transportation datasets from 2005 to 2019
class trans_df():
    def __init__(self,year):
        self.data = pd.read_csv(os.path.join(path,f'trans{year}.csv'))
        self.year = year
        
    def df(self):
        df = self.data[self.data['TRANWORK'] != 0]
        df['state'] = [us.states.lookup(str(f'{fip:02d}')).abbr for fip in df['STATEFIP']]
        
        public = [31,32,33,34,35,36,37,39]
        private = [10,11,12,13,14,15]
        taxicab = 38
        bicycle_or_motorcycle = [20,50]
        walk = 60
        other = 70
        WFH = 80
        
        df.loc[df['TRANWORK'].isin(public), 'TRAN'] = 'public'
        df.loc[(df['TRANWORK'].isin(private)) & (df['RIDERS'] > 1), 'TRAN'] = 'private carpool'
        df.loc[(df['TRANWORK'].isin(private)) & (df['RIDERS'] == 1), 'TRAN'] = 'private not carpool'
        df.loc[df['TRANWORK'].isin(bicycle_or_motorcycle), 'TRAN'] = 'bicycle or motorcycle'
        df.loc[df['TRANWORK'] == taxicab, 'TRAN'] = 'taxi'
        df.loc[df['TRANWORK'] == walk, 'TRAN'] = 'walk'
        df.loc[df['TRANWORK'] == other, 'TRAN'] = 'other'
        df.loc[df['TRANWORK'] == WFH, 'TRAN'] = 'WFH'
        self.df = df
        return df
        
    def sizes(self):
        df = self.df()
        sizes = df['TRAN'].value_counts().sort_index()
        sizes = sizes.drop(['private not carpool','WFH']) 
        self.sizes = sizes
        return sizes
        
    def st_df(self):
        df = self.df()
        st_df = df[['YEAR','state','CITYPOP']].groupby(['YEAR','state']).sum()
        carpool = df[df['TRAN'] == 'private carpool'][['state','TRAN']].groupby('state').size().reset_index(name='carpool')
        n_carpool = df[df['TRAN'] == 'private not carpool'][['state','TRAN']].groupby('state').size().reset_index(name='n_carpool')
        public = df[df['TRAN'] == 'public'][['state','TRAN']].groupby('state').size().reset_index(name='public')
        st_df = st_df.merge(carpool.merge(n_carpool.merge(public,on='state'),on='state'),on='state')
        self.st_df = st_df
        return st_df

df2019 = trans_df(2019)
df2018 = trans_df(2018)
df2017 = trans_df(2017)
df2016 = trans_df(2016)
df2015 = trans_df(2015)
df2014 = trans_df(2014)
df2013 = trans_df(2013)
df2012 = trans_df(2012)
df2011 = trans_df(2011)
df2010 = trans_df(2010)
df2009 = trans_df(2009)
df2008 = trans_df(2008)
df2007 = trans_df(2007)
df2006 = trans_df(2006)
df2005 = trans_df(2005)

df = pd.concat([df2019.df(),df2018.df(),df2017.df(),df2016.df(),df2015.df(),
                df2014.df(),df2013.df(),df2012.df(),df2011.df(),df2010.df(),
                df2009.df(),df2008.df(),df2007.df(),df2006.df(),df2005.df()], axis=0)
us_df = df.groupby(['YEAR','TRAN']).size().reset_index(name='count')
us_df = us_df[us_df['TRAN']!='private not carpool']

us_df.to_csv("us_df.csv", encoding='utf-8', index=False)