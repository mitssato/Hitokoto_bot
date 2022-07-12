
# 定時でWebex Teamsに発言するBotの作成
平日に今日の一言のリマインドをしてくれるBotです。GAS(Google Apps Script)を使用します。

## Botの作成
まずはWebexにてBotを作成します。  
以下URLの記事を参照し、Botを作成してください。   
https://note.com/y_miine/n/nd2f180509015

![image](https://user-images.githubusercontent.com/74521124/132471265-89d29b3b-db1a-4163-bbec-740f4f88ecce.png)


ここで、Tokenも取得しておきます。    
その後、Botを任意のWebex Spaceに参加させます。

## RoomIdの取得
Postman等で、
GETメソッドのList roomsを使用し、Botを参加させたSpaceのRoomId（一番上の"Id"）を記録しておきます。  
https://api.ciscospark.com/v1/rooms

![image](https://user-images.githubusercontent.com/74521124/132471489-6ef1c1e3-2699-4c90-9ef0-dca296ebfc37.png)


## Google Spread sheetを作成。
Google Spread Sheetを作成し、A列にBotに発言してほしい内容を羅列します。  （保存場所は問いません）

例：

![image](https://user-images.githubusercontent.com/74521124/132471663-ca0c1294-8e6e-420a-afb8-e2eb836a8f51.png)


その後、Spread SheetのToolsオプションから、Script Editorを選択してください。

## GAS Scriptの編集
このGithubに乗せている、Code.jsをコピペして使ってください。

botを利用するspaceのroomIdと、作成したbotのBearer tokenを記入してください。

![image](https://user-images.githubusercontent.com/74521124/132472501-9814f1ac-5e4c-437e-9672-9eb700c1f641.png)

[追記]
googleカレンダーに、日本の祝日カレンダーを追加する。

## Trigerの設定
Apps Scriptの管理画面からトリガーを設定してください。  
実行する関数はmainだったと思います。  
https://script.google.com/home

以上です。


