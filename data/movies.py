import pandas as pd
import numpy as np
import os
import matplotlib.pyplot as plt
import seaborn as sns

path = r'/Users/willawei/Documents/GitHub/CAPP30239_FA22/data/MoviesOnStreamingPlatforms.csv'
movies = 'MoviesOnStreamingPlatforms.csv'

df_movies = pd.read_csv(os.path.join(path, movies))
df_movies

