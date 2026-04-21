#!/bin/bash
cd "$(dirname "$0")"
git add -A
git commit -m "feat: complete otjcapital.com build from design spec

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
