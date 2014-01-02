#!/bin/bash
curl  http://${2-recal.cc}/_/$1/csv

#curl --data "command=set C3 value n 121" http://127.0.0.1:8002/_/yoursheetname will set cell C3 in sheetname to a numeric value of 121 .

