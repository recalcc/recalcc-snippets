#!/bin/bash
curl  -F "filedata=@$1;type=text/plain" http://${3-recal.cc}/postcsv/$2
