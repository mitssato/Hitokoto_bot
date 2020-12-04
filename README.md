# 定時でWebex Teamsに発言するBotの作成
ガッキーが平日に今日の一言のリマインドしてくれるボット。GAS使用。
## Botの作成
まずはWebexにてBotの作成。//
以下のURLを参照。//
https://note.com/y_miine/n/nd2f180509015

ここで、Tokenも取得しておく。//
Botを任意のWebex Spaceに参加させる。

## RoomIdの取得
Postmanので、
GETメソッドの、List roomsを使用し、Botを参加させたSpaceのRoomIdを記録する。//
https://api.ciscospark.com/v1/rooms

## Google Spread sheetを作成。
A列にBotに発言してほしい内容を羅列する。//
Spread SheetのToolsオプションから、Script Editorを選択。

## GAS Scriptの編集
Code.jsを使ってください。

## Trigerの設定
Apps Scriptの管理画面からトリガーを設定してください。//
実行する関数はmainだったと思います。//
https://script.google.com/home

以上
