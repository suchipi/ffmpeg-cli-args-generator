#!/usr/bin/env bash
set -euo pipefail

cat ./01_input-data/help-output.txt | node ./02_datagen-scripts/01_parse-help-output-to-json > ./03_generated-data/help-output.json
cat ./03_generated-data/help-output.json | node ./02_datagen-scripts/02_annotate-help-json > ./03_generated-data/annotated-help-output.json
