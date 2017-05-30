/**
 * Created by Administrator on 2017/4/23 0023.
 */
export function formatTime(timeStamp) {
  let time = new Date(timeStamp);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hour = time.getHours();
  let mins = time.getMonth();
  let second = time.getSeconds();
  hour = hourToString(hour);
  mins = hourToString(mins);
  second = hourToString(second);
  let dataStr = '' + year + '年' + month + '月' + date + '日     ' + hour + ':' + mins + ':' + second;
  return dataStr;
}

function hourToString(type) {
  if (type < 10) {
    return '0' + type;
  }
  return '' + type;
}
