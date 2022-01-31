#!/usr/bin/env bash
set -euo pipefail

rm -rf ./03_generated-data/*.json

node ./02_datagen-scripts/01_parse-help-output-to-json < ./01_input-data/help-output.txt > ./03_generated-data/help-output.json
node ./02_datagen-scripts/02_patch-help-json < ./03_generated-data/help-output.json > ./03_generated-data/annotated-help-output.json
