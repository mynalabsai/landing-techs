#!/usr/bin/env bash
# Proprietary software
# Copyright © 2022 Myna Labs Inc. All rights reserved.

set -ex

DEFAULT_TAG="dev"

if [ -z "${GITHUB_REF_TYPE}" ]; then
  export VERSION=${DEFAULT_TAG}
else
  if [ "${GITHUB_REF_TYPE}" == "tag" ]; then
    export VERSION=${GITHUB_REF_NAME}
  else
    if [ "${GITHUB_REF_NAME}" == "main" ]; then
      export VERSION="${DEFAULT_TAG}-${GITHUB_RUN_NUMBER}"
    else
      export VERSION="${GITHUB_REF_NAME}-${GITHUB_RUN_NUMBER}"
    fi
  fi
fi

echo "Version is ${VERSION}"
