# All Right Extremist

Clothing company workspace. No build tooling, tests, or code yet — just
directory scaffolding and stub docs.

## Kanban boards

This workspace belongs to the **All Right Extremist** organization (clothing company). Its Kanban board slug is `all-right-extremist`. All Kanban operations for All Right Extremist work MUST explicitly target `all-right-extremist` (`--board all-right-extremist` / `board="all-right-extremist"`).

- Never rely on the current-board pointer as a default; an ambiguous board is a routing error.
- If the assigned task's board does not match `all-right-extremist`, report the mismatch before acting — do not silently switch.

## Layout
- `Hot/` — content directory
- `Hot/Clothing/` — clothing-specific material

## Notes
- Each area has a `README.md`; keep them current as content is added.
- Copyright All Right Extremist (see `Hot/README.md`).
- No git repo initialized here.

## Mission-Driven Development and GitHub Guardrails

This workspace belongs to the **All Right Extremist** GitHub organization (`github.com/AllRightExtremist`). The `all-right-extremist` Hermes profile is the organization agent and owns authorized remote GitHub writes for repositories in `~/AllRightExtremist`. This root policy applies throughout the workspace; a nested `AGENTS.md` may add stricter project/build rules but may not weaken these GitHub safety gates.

### Mission issue contract

Development uses **Mission-Driven Development (MDD)**: the mission drives the development. Every mission solves a problem. Not every issue is a mission; a human or agent must explicitly take the issue on as a mission.

Every mission issue has this structure:

```markdown
## Problem

May be empty when the issue title fully states the problem.

## Solution

Required. State the intended or implemented solution.

### Files Affected

Required. Leave empty when no files are altered.
```

For multiple commits, add one ordered section per sub-commit under the issue description:

```markdown
## A

What sub-commit A solves and how.

## B

What sub-commit B solves and how.
```

### Branch and commit grammar

- Branch: `Issue<N>` where `<N>` is the actual GitHub issue ticket number. Example: ticket 26 → `Issue26`.
- `Issue123` in documentation means “Issue followed by the ticket number.” It is not the literal branch name unless the real issue is 123.
- One commit: `#<N> <title>` or `#<N>.A <sub-commit title>`.
- Multiple commits: start at `A` and advance in issue order: `#<N>.A`, `#<N>.B`, etc. Each suffix must have the matching `## A`, `## B`, etc. section in the issue body.
- If the suffix sequence becomes unwieldy (for example `ZA`), open another issue rather than extending the same mission indefinitely.

Multiple commits per issue are valid. Optimize each commit as durable training data for humans and LLMs:

- one coherent solution step and one reason to exist;
- a descriptive title that makes sense with the issue context;
- only files needed for that step;
- no drive-by cleanup, generated/build noise, secrets, or unrelated fixes;
- tests or other verification appropriate to that exact step;
- causal ordering when one sub-commit depends on another.

Do not make a giant mixed commit merely to reduce commit count. Do not create meaningless micro-commits merely to increase it. Let the mission define the unit.

### Required workflow

1. Confirm the request is a mission and identify the real issue number. If no issue exists, create or request one before committing.
2. Read the entire issue and comments. Confirm `## Problem`, required `## Solution`, and required `### Files Affected`; update the mission record as the solution evolves.
3. Identify the exact nested repository. Before any remote write, verify `git remote get-url origin` belongs to `AllRightExtremist`. A legacy, foreign, missing, or ambiguous owner is a hard stop requiring the Captain.
4. Start from the repository's intended base branch without discarding local work. Create or switch to `Issue<N>`; do not work on the default branch.
5. Inspect the repository's own `AGENTS.md`, dirty state, and relevant history. Preserve unrelated user changes.
6. Implement only the current mission/sub-commit scope. Update `### Files Affected` and the matching `## A`/`## B` section before committing.
7. Run real verification appropriate to the repository. Never fabricate a test, build, review, or CI result.
8. Review the staged diff for scope, secrets, generated files, binaries, and unrelated changes. Stage explicit paths; avoid blanket staging when the worktree contains unrelated edits.
9. Commit with the MDD grammar and push only to `Issue<N>`.
10. Hand off the issue number, branch, commit IDs, files affected, checks run, results, and residual risks. Human verification decides acceptance and integration.

### Remote-write boundary

The organization agent may create/update issues, create `Issue<N>` branches, push mission commits, and prepare pull requests when the Captain authorizes GitHub work. Shared specialist agents work through kanban and return artifacts; they do not receive or reuse this profile's GitHub credential.

Without explicit authorization for the exact action, never:

- push directly to `main`, `master`, or another protected/default branch;
- force-push or rewrite published history;
- merge or auto-merge a pull request;
- delete branches, tags, releases, repositories, issues, or evidence;
- change repository visibility, settings, rulesets, branch protection, webhooks, Actions secrets, deploy keys, collaborators, teams, or organization membership;
- publish packages/releases or edit workflow files merely to bypass a failing check;
- use admin/delete scopes when ordinary Contents/Pull requests/Issues permissions suffice.

Human verification is the merge gate. A successful push or green CI run is evidence, not permission to integrate.

### Credential isolation

- Store this organization's fine-grained GitHub token only in `~/.hermes/profiles/all-right-extremist/.env`; prefer organization-limited or selected-repository access and short expiration.
- Never put the token in global `~/.hermes/.env`, another profile, git config, a repository `.env`, source, issue text, commit text, remote URL, shell history, logs, or chat.
- Do not echo, print, inspect, or transmit token values. Refer to credential variable names only.
- Do not reuse the Captain's owner/admin credential. Grant only Metadata read plus the minimum of Contents, Pull requests, and Issues needed for mission work. Add Actions read only when required; do not grant Administration or repository deletion.
- If authentication is absent or insufficient, stop and request the correctly scoped credential. Never broaden permissions or substitute another organization's token.

## Code Style — Chimera+ (AStarship Standard)

All **code and filenames** in the AStarship ecosystem follow the **Chimera+** style guide
(`~/AStarStarship/ASCIICrabs/__ChimeraPlus.md`). The naming philosophy applies to code
identifiers and filenames fleet-wide.

### Core Rule: immutable vs mutable
- **Immutable** (can't change after init) → **CamelCase**
- **Mutable** (changes at runtime) → **lower_snake_case**

### Naming Summary
| Element | Convention | Example |
|---|---|---|
| Type aliases (fixed-width) | 3-letter CAPS codes | `CHA` char8, `ISC` int32, `IUD` uint64, `BOL` bool, `FPC` float32, `FPD` double64 |
| Structs / classes | CamelCase + T(POD)/A(utoject) prefix | `TArray`, `AMap`, `Crabs` |
| Struct members (mutable) | lower_snake_case | `socket_bytes`, `header_bytes` |
| Struct members (immutable) | CamelCase | `StackTotalMin`, `ColumnWidth` |
| Free functions / methods | CamelCase, type-prefixed | `CrabsInit`, `TArrayBytes`, `TMapFind` |
| Function suffixes | `_NC` (no-check), `C` (const/count), `T` (POD), `A` (autoject) | `TArrayInsert_NC`, `CSizeMin` |
| Local variables | lower_snake_case (always) | `bytes_data`, `read_cursor` |
| Macros / #define | UPPER_SNAKE_CASE | `CRABS_RUN_TESTS`, `CPU_X64` |
| Private/protected members | trailing underscore | `aobj_`, `array_` |
| Namespaces | `namespace _ { ... }` | single shared underscore namespace |
| DB names / tables / columns | lower_snake_case (mutable) | `user_sessions`, `order_items` |
| Client-facing API / headers | CamelCase (immutable contract) | `OrderService`, `PaymentGateway` |
| Filenames (client contract) | CamelCase | `OrderService.h` |
| Filenames (host/storage) | lower_snake_case | `user_sessions.py` |

### Header Boilerplate (C/C++)
```
// Copyright AStarship <https://astarship.net>.
#pragma once
#ifndef CRABS_<NAME>_<H|HPP>
#define CRABS_<NAME>_<H|HPP>
#include "..."
#if SEAM >= CRABS_<NAME>
... body ...
#endif
#endif
```

### Formatting
- 2-space indent
- Opening brace same line (functions/control), next line (structs/classes)
- `D_ASSERT()`, `D_COUT()`, `D_RETURNT(type, val)` for debug/assert/return
- `NILP` = nullptr
- `alignas(ACPUCacheLineSize)` for hot structs
- Doxygen `/** @param @return @pre @link @see @code */` comments

### The One-Sentence Version
**Immutable → CamelCase, mutable → lower_snake_case; macros UPPER_SNAKE; private/protected
get a trailing `_`; types are short CAPS width-codes (CHA/ISC/IUD/BOL); structs are
CamelCase with T(POD)/A(utoject) prefix; functions are CamelCase with T/A kind prefixes
and _NC/C markers; locals are snake_case; everything lives in `namespace _`; every file
starts with AStarship copyright, `#pragma once`, a `CRABS_*` guard, and `#if SEAM >= CRABS_*`
gating.** The name tells you the kind, width, access level, and mutability — before you
read the body.