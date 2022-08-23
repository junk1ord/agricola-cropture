#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure


# In[2]:


filePath = input()
colNames = ['dist', 'market', 'comm', 'vary', 'grade', 'minPrice', 'maxPrice', 'modalPrice', 'priceDate']
data = pd.read_csv(filePath, names=colNames)

# D:/VESIT/TE Project/Datasets/Satara_All_Wheat.csv


# In[ ]:


data.head(10)


# In[3]:


df = data


# # Data Preprocessing

# ### Converting priceDate to standard YYYY-MM-DD format for better readability

# In[4]:


df['priceDate'] = pd.to_datetime(df['priceDate'])


# ### Sorting the values with respect to ascending date

# In[5]:


df = df.sort_values('priceDate', ascending=True)


# ### Mapping Markets to numbers

# In[6]:


market_mapping = {"Koregaon": 0, "Lonand": 1, "Palthan": 2, "Vaduj": 3}
df.market = [market_mapping[item] for item in df.market]


# ### Mapping Varieties to numbers

# In[7]:


variety_mapping = {"Maharashtra 2189": 0, "Other": 1}
df.vary = [variety_mapping[item] for item in df.vary]


# ### Shortlisting datasets based on market

# In[8]:


df_market0 = df[df.market == 0]
df_market1 = df[df.market == 1]
df_market2 = df[df.market == 2]
df_market3 = df[df.market == 3]


# ### df = df.sort_values(by="date")

# In[9]:


df_market_0 = df_market0.sort_values(by="priceDate")
df_market_1 = df_market1.sort_values(by="priceDate")
df_market_2 = df_market2.sort_values(by="priceDate")
df_market_3 = df_market3.sort_values(by="priceDate")


# ### Dropping unnecessary columns

# In[10]:


# df.drop(labels=['Locations', 'Founder'], axis=1)
# df.drop(columns=['Founder', 'Locations'])

df_market_0 = df_market_0.drop(["dist", "market", "comm", "vary", "grade", "maxPrice", "modalPrice"], axis=1)
df_market_1 = df_market_1.drop(["dist", "market", "comm", "vary", "grade", "maxPrice", "modalPrice"], axis=1)
df_market_2 = df_market_2.drop(["dist", "market", "comm", "vary", "grade", "maxPrice", "modalPrice"], axis=1)
df_market_3 = df_market_3.drop(["dist", "market", "comm", "vary", "grade", "maxPrice", "modalPrice"], axis=1)


# ### Forward Filling price values on dates

# In[11]:


r0 = pd.date_range(start=df_market_0.priceDate.min(), end=df_market_0.priceDate.max())
df_market_0 = df_market_0.set_index('priceDate').reindex(r0).fillna(method="ffill").rename_axis('priceDate').reset_index()
df_market_0


# In[12]:


r1 = pd.date_range(start=df_market_1.priceDate.min(), end=df_market_1.priceDate.max())


# ###### This code won't work because df_market_1 has a duplicate entry - two entries for the same date. So when priceDate is converted to indices, there's two indices with same value, which is not allowed, since indices are unique. So we have to take out the duplicate index first, keeping the first index, since the first price announced on the day could serve as a good measure of the minPrice for that day.
# ```python
# df_market_1 = df_market_1.set_index('priceDate').reindex(r1).fillna(method="ffill").rename_axis('priceDate').reset_index()
# df_market_1
# ```

# ### Converting the priceDate column to the index of the df_market_1 and dropping those tuples who share the same index, except for the very first tuple

# In[13]:


df_market_1 = df_market_1.set_index('priceDate')
df_market_1 = df_market_1[~df_market_1.index.duplicated(keep='first')]


# In[14]:


df_market_1 = df_market_1.reindex(r1).fillna(method="ffill").rename_axis('priceDate').reset_index()
df_market_1


# # ————————————————————————————————————

# In[15]:


r2 = pd.date_range(start=df_market_2.priceDate.min(), end=df_market_2.priceDate.max())


# In[16]:


df_market_2 = df_market_2.set_index('priceDate')
df_market_2 = df_market_2[~df_market_2.index.duplicated(keep='first')]


# In[17]:


df_market_2 = df_market_2.reindex(r2).fillna(method="ffill").rename_axis('priceDate').reset_index()
df_market_2


# # ————————————————————————————————————

# In[18]:


r3 = pd.date_range(start=df_market_3.priceDate.min(), end=df_market_3.priceDate.max())
df_market_3 = df_market_3.set_index('priceDate').reindex(r3).fillna(method="ffill").rename_axis('priceDate').reset_index()
df_market_3


# ### Extracting X and Y dataframes 

# In[19]:


df_market_0_x = df_market_0.filter(['priceDate'], axis=1)
df_market_0_y = df_market_0.filter(['minPrice'], axis=1)

df_market_1_x = df_market_1.filter(['priceDate'], axis=1)
df_market_1_y = df_market_1.filter(['minPrice'], axis=1)

df_market_2_x = df_market_2.filter(['priceDate'], axis=1)
df_market_2_y = df_market_2.filter(['minPrice'], axis=1)

df_market_3_x = df_market_3.filter(['priceDate'], axis=1)
df_market_3_y = df_market_3.filter(['minPrice'], axis=1)


# # Alogrithm Part

# In[20]:


timeseries_data_0 = df_market_0_y['minPrice'].tolist()
timeseries_data_1 = df_market_1_y['minPrice'].tolist()
timeseries_data_2 = df_market_2_y['minPrice'].tolist()
timeseries_data_3 = df_market_3_y['minPrice'].tolist()


# In[21]:


#number of time steps

n_steps = 5


# In[22]:


# preparing independent and dependent features
def prepare_data(timeseries_data, n_features):
    X, y =[],[]
    for i in range(len(timeseries_data)):
        # find the end of this pattern
        end_ix = i + n_features
        # check if we are beyond the sequence
        if end_ix > len(timeseries_data)-1:
            break
        # gather input and output parts of the pattern
        seq_x, seq_y = timeseries_data[i:end_ix], timeseries_data[end_ix]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)


# In[23]:


X0,y0 = prepare_data(timeseries_data_0, n_steps)
X1,y1 = prepare_data(timeseries_data_1, n_steps)
X2,y2 = prepare_data(timeseries_data_2, n_steps)
X3,y3 = prepare_data(timeseries_data_3, n_steps)


# ### Reshaping the data
# ##### (Necessary for LSTM, to convert this shape to a 3-dimensional shape)

# In[24]:


# reshape from [samples, timesteps] into [samples, timesteps, features]
n_features = 1

X0 = X0.reshape((X0.shape[0], X0.shape[1], n_features))
X1 = X1.reshape((X1.shape[0], X1.shape[1], n_features))
X2 = X2.reshape((X2.shape[0], X2.shape[1], n_features))
X3 = X3.reshape((X3.shape[0], X3.shape[1], n_features))


#  ## Building the LSTM Model - KN

# ### Importing Model Dependencies

# In[25]:


from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dense

from sklearn.model_selection import train_test_split


# ### The actual model ---

# In[220]:


# define model
model = Sequential()
model.add(LSTM(50, activation='relu', return_sequences=True, input_shape=(n_steps, n_features)))
model.add(LSTM(50, activation='relu', return_sequences=False))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mean_absolute_error', metrics=['accuracy'])


# ### Test and Train Split

# In[297]:


x_train_0,x_test_0,y_train_0,y_test_0 = train_test_split(X0, y0, test_size=0.2, shuffle=False)
x_train_1,x_test_1,y_train_1,y_test_1 = train_test_split(X1, y1, test_size=0.2, shuffle=False)
x_train_2,x_test_2,y_train_2,y_test_2 = train_test_split(X2, y2, test_size=0.2, shuffle=False)
x_train_3,x_test_3,y_train_3,y_test_3 = train_test_split(X3, y3, test_size=0.2, shuffle=False)


# ### Runnning the Models

# In[298]:


history_0 = model.fit(x_train_0,y_train_0,epochs=300,verbose=0,validation_data=(x_test_0,y_test_0))


# In[299]:


history_1 = model.fit(x_train_1,y_train_1,epochs=300,verbose=0,validation_data=(x_test_1,y_test_1))


# In[300]:


history_2 = model.fit(x_train_2,y_train_2,epochs=300,verbose=0,validation_data=(x_test_2,y_test_2))


# In[301]:


history_3 = model.fit(x_train_3,y_train_3,epochs=300,verbose=0,validation_data=(x_test_3,y_test_3))


# ### Compiling the results

# In[302]:


results_0 = model.predict(x_test_0)
results_1 = model.predict(x_test_1)
results_2 = model.predict(x_test_2)
results_3 = model.predict(x_test_3)


# ## Picturizing results

# In[303]:


font1 = {'family':'serif','color':'blue','size':20}
font2 = {'family':'serif','color':'darkred','size':15}


# In[304]:


fig = plt.gcf()
fig.set_size_inches(30, 10, forward=True)

plt.title("Market 0", fontdict = font1)
plt.ylabel("Price", fontdict = font2)

plt.scatter(range(y_test_0.shape[0]), y_test_0, c="g")
plt.scatter(range(results_0.shape[0]), results_0,c="r")
plt.show()


# In[305]:


fig = plt.gcf()
fig.set_size_inches(30, 10, forward=True)

plt.title("Market 1", fontdict = font1)
plt.ylabel("Price", fontdict = font2)

plt.scatter(range(y_test_1.shape[0]), y_test_1, c="g")
plt.scatter(range(results_1.shape[0]), results_1,c="r")
plt.show()


# In[306]:


fig = plt.gcf()
fig.set_size_inches(30, 10, forward=True)

plt.title("Market 2", fontdict = font1)
plt.ylabel("Price", fontdict = font2)

plt.scatter(range(y_test_2.shape[0]), y_test_2, c="g")
plt.scatter(range(results_2.shape[0]), results_2,c="r")
plt.show()


# In[307]:


fig = plt.gcf()
fig.set_size_inches(30, 10, forward=True)

plt.title("Market 3", fontdict = font1)
plt.ylabel("Price", fontdict = font2)

plt.scatter(range(y_test_3.shape[0]), y_test_3, c="g")
plt.scatter(range(results_3.shape[0]), results_3,c="r")
plt.show()


# ## Predicting the Future prices

# In[308]:


results_0 = results_0.reshape(results_0.shape[0],)
results_1 = results_1.reshape(results_1.shape[0],)
results_2 = results_2.reshape(results_2.shape[0],)
results_3 = results_3.reshape(results_3.shape[0],)


# In[309]:


results_list_0 = results_0.tolist()
results_list_1 = results_1.tolist()
results_list_2 = results_2.tolist()
results_list_3 = results_3.tolist()


# In[310]:


x_input_list_0 = []
x_input_list_1 = []
x_input_list_2 = []
x_input_list_3 = []


for i in results_list_0[len(results_list_0)-5:len(results_list_0)]:
    x_input_list_0.append(i)

for i in results_list_1[len(results_list_1)-5:len(results_list_1)]:
    x_input_list_1.append(i)
    
for i in results_list_2[len(results_list_2)-5:len(results_list_2)]:
    x_input_list_2.append(i)

for i in results_list_3[len(results_list_3)-5:len(results_list_3)]:
    x_input_list_3.append(i)


# ### Predicting the next n days

# #### MARKET 3 - just replace the "3" with 0, 1, 2 for the respective markets (pfft copy paste)

# In[311]:


# demonstrate prediction for next n days
n_days = 30
x_input_3 = np.array(x_input_list_3)
temp_input=list(x_input_3)
lst_output=[]
i=0
while(i<n_days):
    
    if(len(temp_input)>5):
        x_input_3=np.array(temp_input[1:])
        print("{} day input {}".format(i,x_input_3))
        #print(x_input)
        x_input_3 = x_input_3.reshape((1, n_steps, n_features))
        #print(x_input)
        yhat = model.predict(x_input_3, verbose=0)
        print("{} day output {}".format(i,yhat))
        temp_input.append(yhat[0][0])
        temp_input=temp_input[1:]
        #print(temp_input)
        lst_output.append(yhat[0][0])
        i=i+1
    else:
        x_input_3 = x_input_3.reshape((1, n_steps, n_features))
        yhat = model.predict(x_input_3, verbose=0)
        print(yhat[0])
        temp_input.append(yhat[0][0])
        lst_output.append(yhat[0][0])
        i=i+1
    

print(lst_output)


# In[264]:


import datetime


# In[312]:


predictions = {}

for i in range(len(lst_output)):
    predictions[str((df_market_3.priceDate.max()+datetime.timedelta(i+1)).date())] = lst_output[i]


# ### Predictions for the next 30 days

# In[313]:


predictions


# In[ ]:




