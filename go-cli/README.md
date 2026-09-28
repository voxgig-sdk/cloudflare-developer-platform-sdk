# cloudflare-developer-platform-cli

boru-driven command-line client **and** interactive REPL for the CloudflareDeveloperPlatform
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-developer-platform-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-developer-platform-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudflare-developer-platform-cli list app
./cloudflare-developer-platform-cli load 1 app            # {id:1} shorthand
./cloudflare-developer-platform-cli load '{id:1}' app       # explicit match map
./cloudflare-developer-platform-cli update '{name:"x"}' app
./cloudflare-developer-platform-cli list artifact

# 5. Override the API base URL for a single call
CLOUDFLARE_DEVELOPER_PLATFORM_BASE=https://api.example.com ./cloudflare-developer-platform-cli list app

# 6. No arguments -> interactive REPL
./cloudflare-developer-platform-cli
cloudflare-developer-platform> list app
cloudflare-developer-platform> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-developer-platform-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-developer-platform-cli list app
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudflare-developer-platform-cli list app
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./cloudflare-developer-platform-cli load 1 app          # scalar shorthand for {id:1}
./cloudflare-developer-platform-cli load '{id:1}' app     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./cloudflare-developer-platform-cli update '{id:1,name:"new"}' app
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_DEVELOPER_PLATFORM_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-developer-platform-cli list app
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-developer-platform>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-developer-platform-cli
cloudflare-developer-platform> list app
cloudflare-developer-platform> /help
cloudflare-developer-platform> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 10 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `app`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_DEVELOPER_PLATFORM_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-developer-platform-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 10 entities this SDK exposes (any is valid as `<entity>`):

app artifact bill_subs_api_bulk_account_subscription brand_protection changelog flag flagship_evaluation_result flagship_flag_definition monolith_health zone_snippet

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-developer-platform-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
