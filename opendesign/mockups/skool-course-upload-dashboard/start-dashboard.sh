#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
DASHBOARD_URL="http://localhost:8289/opendesign/mockups/skool-course-upload-dashboard/"
VIEWER_URL="http://localhost:8289/opendesign/"

if curl -sf -o /dev/null "$VIEWER_URL"; then
  printf 'Builders Lab upload desk is already running:\n%s\n' "$DASHBOARD_URL"
  exit 0
fi

if lsof -ti tcp:8289 >/dev/null 2>&1; then
  printf 'Port 8289 is in use by another process. Free the port and run this script again.\n' >&2
  exit 1
fi

nohup python3 -m http.server 8289 --directory "$PROJECT_ROOT" >"${TMPDIR:-/tmp}/george-opendesign-8289.log" 2>&1 &
sleep 1

if ! curl -sf -o /dev/null "$VIEWER_URL"; then
  printf 'The local server did not start. See %s\n' "${TMPDIR:-/tmp}/george-opendesign-8289.log" >&2
  exit 1
fi

printf 'Builders Lab upload desk is live:\n%s\n' "$DASHBOARD_URL"
