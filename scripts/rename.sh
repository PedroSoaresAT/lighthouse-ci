#!/usr/bin/env bash

name=$1
uppercaseName=`echo "$name" | tr '[:lower:]' '[:upper:]' | sed 's/-/_/g'`

if [ -z "${name}" ]; then
  echo "❌ Please provide a project name"
  exit 1
fi

echo "Renaming project..."

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' -r "s/PROJECT_NAME/$name/" package.json
  sed -i '' -r "s/UPPERCASE_PROJECT_NAME/$uppercaseName/" README.md
  sed -i '' -r "s/PROJECT_NAME/$name/" README.md
  sed -i '' -r "s/PROJECT_NAME/$name/" composables/useAnalytics.ts
  sed -i '' -r "s/PROJECT_NAME/$name/" pages/index.vue
  sed -i '' -r '8,17d' README.md
else
  sed -i -r "s/PROJECT_NAME/$name/" package.json
  sed -i -r "s/UPPERCASE_PROJECT_NAME/$uppercaseName/" README.md
  sed -i -r "s/PROJECT_NAME/$name/" README.md
  sed -i -r "s/PROJECT_NAME/$name/" composables/useAnalytics.ts
  sed -i -r "s/PROJECT_NAME/$name/" pages/index.vue
  sed -i -r '8,17d' README.md
fi

rm -rf ./scripts

echo "✅ Completed"
exit 0