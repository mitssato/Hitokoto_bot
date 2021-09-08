<<<<<<< HEAD
# 定時でWebex Teamsに発言するBotの作成
ガッキーが平日に今日の一言のリマインドしてくれるボットです。GAS(Google Apps Script)を使用します。

## Botの作成
まずはWebexにてBotを作成します。  
以下URLの記事を参照し、Botを作成してください。   
https://note.com/y_miine/n/nd2f180509015

![image](https://user-images.githubusercontent.com/74521124/132471265-89d29b3b-db1a-4163-bbec-740f4f88ecce.png)


ここで、Tokenも取得しておきます。    
その後、Botを任意のWebex Spaceに参加させます。

## RoomIdの取得
Postmanで、
GETメソッドのList roomsを使用し、Botを参加させたSpaceのRoomId（一番上の"Id"）を記録しておきます。  
https://api.ciscospark.com/v1/rooms

## Google Spread sheetを作成。
A列にBotに発言してほしい内容を羅列します。  
例：https://docs.google.com/spreadsheets/d/1paxrEfFCPTgEo1iRTCDViB2C2qJNiqLcGyn9fST-MPw/edit#gid=0
Spread SheetのToolsオプションから、Script Editorを選択してください。

## GAS Scriptの編集
Code.jsを使ってください。

## Trigerの設定
Apps Scriptの管理画面からトリガーを設定してください。  
実行する関数はmainだったと思います。  
https://script.google.com/home

以上です。

完成系のGAS Scriptはこちらになります：
https://script.google.com/d/1gjuXj5UByKD0q0s7ArVNb19bsLA_tb-rg4KNJ0WjugfisXnpPEJve-zl/edit
>>>>>>> origin/master
