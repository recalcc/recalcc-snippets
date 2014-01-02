#!/bin/bash
curl --data "command=recalc" http://${2-recal.cc}/_/$1
