#!/bin/sh
# check output matches golden master, defaults to 10 runs, 1000 stored
#
# Create golden master with:
# for i in $(seq 1000) ; do SEED=$i node game.js > golden_master/$i.output ; done
#
for i in $(seq "${1:-10}");
do
	if SEED="$i" node game.js | cmp - "golden_master/$i.output"; then
		echo "Run $i OK"
	else
		echo "Error in run $i"
		exit 1
	fi
done
