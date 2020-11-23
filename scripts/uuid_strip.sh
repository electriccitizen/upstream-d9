#!/usr/bin/env bash
FILES=../config/sync/*
for f in $FILES
do
  echo "Processing $f file..."
  sed -i '' '/^uuid:/d' $f
#  sed -i '' '/^_core:$/N; /default_config_hash:/d' $f
done
