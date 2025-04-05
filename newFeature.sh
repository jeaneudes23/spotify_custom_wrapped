#!/bin/bash

read -p "Model name (plural): " model
base_path="src/features/$model"
mkdir "$base_path" "$base_path/components" "$base_path/api" "$base_path/schema" "$base_path/server-actions"
touch "$base_path/api/${model}Api.ts"
touch "$base_path/schema/${model}Schema.ts"
touch "$base_path/server-actions/${model}ServerActions.ts"