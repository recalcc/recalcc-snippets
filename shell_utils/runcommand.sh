#!/bin/bash
curl --data "command=$1" http://${3-recal.cc}/_/$2
#curl  -F "filedata=@$1;type=text/plain" http://${3-recal.cc}/postcsv/$2
# curl --data "command=set C3 value n 121" http://127.0.0.1:8002/_/yoursheetname will set cell C3 in sheetname to a numeric value of 121 .