#! /bin/bash

red='\033[1;31m'
green='\033[1;32m'
normal='\033[0m'
bold='\033[1m'

for file in test/test*$1*.js; do
  echo -e "$file\n"
  node $file
  count=$(node $file | grep -c '✅')
  passed=$(($passed + $count))
  count=$(node $file | grep -c '❌')
  failed=$(($failed + $count))
  echo -e '\n'
done

total=$((${passed} + ${failed}))
echo -e "     ${bold}Total ${total}     ${green}${passed} Passing${red}     ${failed} Failing${normal}\n"
