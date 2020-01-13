'use strict';

function GetTime()
{
  const d = new Date();
  
  var day = {
    '1': "月",
    '2': "火",
    '3': "水",
    '4': "木",
    '5': "金",
    '6': "土",
    '0': "日"
  };
  var timeMap = {
    'Year': d.getFullYear(),
    'Month': d.getMonth() + 1,
    'Date' : d.getDate(),
    'Day' :  day[d.getDay().toString()],
    'Hours': d.getHours(),
    'Minutes': d.getMinutes(),
    'Seconds': d.getSeconds()
  };
  return timeMap;
}

module.exports = {
  GetTime
};