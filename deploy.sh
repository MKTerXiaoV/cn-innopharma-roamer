#!/bin/bash
# 部署中国创新药热门靶点演进图谱到 Cloudflare Pages（清代理避 Clash；token 取自 ~/.zshrc）
set -euo pipefail

cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

unset http_proxy https_proxy all_proxy HTTP_PROXY HTTPS_PROXY ALL_PROXY
export no_proxy="*"

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ] && [ -f "$HOME/.zshrc" ]; then
  token_line="$(grep -E '^(export[[:space:]]+)?CLOUDFLARE_API_TOKEN=' "$HOME/.zshrc" | tail -n 1 || true)"
  if [ -n "$token_line" ]; then
    token_value="${token_line#export }"
    token_value="${token_value#CLOUDFLARE_API_TOKEN=}"
    token_value="${token_value%\"}"
    token_value="${token_value#\"}"
    token_value="${token_value%\'}"
    token_value="${token_value#\'}"
    export CLOUDFLARE_API_TOKEN="$token_value"
  fi
fi

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "CLOUDFLARE_API_TOKEN 未找到：请先在 ~/.zshrc 配置 token。"
  exit 1
fi

if ! command -v wrangler >/dev/null 2>&1; then
  echo "wrangler 未安装或不在 PATH 中。"
  exit 1
fi

deploy() {
  wrangler pages deploy public --project-name cn-innopharma-roamer --branch production
}

deploy || {
  echo "首次部署失败，3 秒后重试一次..."
  sleep 3
  deploy
}
