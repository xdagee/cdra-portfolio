---
description: Performs a high-level Production Readiness Audit by orchestrating multiple domain-specific reviews.
---

# Release Manager Workflow

This workflow ensures that all technical and business quality gates are passed before a production release.

## Step 1: Quality Gate Verification

- **Frontend Check**: Invoke `/senior-fe-reviewer`. Must score >0.8.
- **Backend Check**: Invoke `/senior-be-reviewer`. Must score >0.8.
- **QA & Security Check**: Invoke `/senior-qa-auditor`. Must score >0.9.

## Step 2: Performance & SEO Audit

// turbo: run_command "npm run lighthouse" OR "next build"

- Verify Core Web Vitals compliance.
- Check Lighthouse SEO and Performance scores.
- Ensure SEO meta tags are correctly populated.

## Step 3: Deployment Readiness

- Verify all environment variables are documented.
- Check that build logs are clean of critical warnings.
- Confirm that `.gitignore` prevents sensitive data leaks.

## Step 4: Final Verdict

- Provide a "Production Readiness Score" (0.0 to 1.0).
- Explicitly approve or block the release.
- Summarize critical blockers vs. minor improvements.
