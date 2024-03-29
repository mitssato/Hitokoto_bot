 /**
 * 投稿処理
 * roomIdとBearerトークンを入力必要
 */
function send(text) {
  
  // 投稿内容を作成
  var data = {
    // 投稿先のroomIdを以下に入力
    'roomId': '',
    // 本文
    'text': text
  };
  
  // リクエストオプション
  var options = {
    // post
    'method': 'post',
    // json
    'contentType': 'application/json',
    // ヘッダ
    'headers': { 
      // 認証情報を以下に入力
      'Authorization': 'Bearer ' + ''
    },
    // 投稿内容を整形
    'payload': JSON.stringify(data)
  }
  
  // 投稿処理を実行
  var response = UrlFetchApp.fetch('https://api.ciscospark.com/v1/messages', options);
}

function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet(); 
  const lastRow = sheet.getLastRow();
  
  for(let i = 2; i <= lastRow; i++) {
    if(!sheet.getRange(i, 4).getValue()){ 
      const text = sheet.getRange(i, 1).getValue();
      send(text);
      sheet.getRange(i, 4).setValue(true);
      
      if(i >= lastRow) {
        sheet.getRange(2, 4, lastRow - 1).clearContent();
      }
      break;
    }
  }
}

function isWorkday (targetDate) {

  // targetDate の曜日を確認、週末は休む (false)
  var rest_or_work = ["REST","mon","tue","wed","thu","fri","REST"]; // 日〜土
  if ( rest_or_work [targetDate.getDay ()] == "REST" ) {
    return false;
  }; 

  // 祝日カレンダーを確認する
  var calJpHolidayUrl = "ja.japanese#holiday@group.v.calendar.google.com";
  var calJpHoliday = CalendarApp.getCalendarById (calJpHolidayUrl);
  if (calJpHoliday.getEventsForDay (targetDate).length != 0) {
    // その日に予定がなにか入っている = 祝祭日 = 営業日じゃない (false)
    return false;
  } ;

  // 全て当てはまらなければ営業日 (True)
  return true;
}

// main
function main () {

  var today = new Date ();

  // debug のために任意の日付を仕込む (year,month-1,day,hour,min,sec)
  //today = new Date (2019, 10, 4, 10, 0, 0);

  // 営業日であれば実行
  if (isWorkday (today) == true) {
    myFunction();
  }
}
