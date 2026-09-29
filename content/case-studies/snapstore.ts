import type { CaseStudy, Evidence } from './types'
import figSsrf from '../work/snapstore/fig-ssrf.png'
import figOverflow from '../work/snapstore/fig-overflow.png'
import figTraversal from '../work/snapstore/fig-traversal.png'
import figSqli from '../work/snapstore/fig-sqli.png'
import figPath from '../work/snapstore/fig-path.png'

const REPORT =
  'https://github.com/salahudeenmatine/snapstore-security-assessment/blob/main/snapstore-security-assessment.pdf'
const REPO = 'https://github.com/salahudeenmatine/snapstore-security-assessment'

/**
 * Evidence crops come from the report's own figures. They are cropped, never
 * spliced: a screenshot with lines removed from the middle stops being evidence.
 * Highlight positions are percentages of the cropped image height.
 */
export const evidence = {
  ssrf: {
    src: figSsrf,
    reportFigure: 1,
    dark: false,
    alt: 'Terminal: curl requests /import with url set to the gateway’s own address, http://127.0.0.1:8080/nope. The response is “unknown endpoint”.',
    caption:
      'The gateway fetched its own internal address and relayed the reply. “unknown endpoint” only comes back if the server really made that request.',
    highlights: [{ top: 69.05, height: 27.38 }],
  },
  overflow: {
    src: figOverflow,
    reportFigure: 2,
    dark: false,
    alt: 'Terminal: a curl request to /trim with a 200-character filename returns “signal: trace/BPT trap”. A second request with file=test.jpg returns “trimmed metadata from test.jpg”.',
    caption:
      'A 200-character filename sent through /trim kills the exiftrim child process, and the gateway reports signal: trace/BPT trap. A normal filename still returns “trimmed metadata from test.jpg”.',
    highlights: [
      { top: 39.66, height: 20.11 },
      { top: 78.74, height: 20.69 },
    ],
  },
  traversal: {
    src: figTraversal,
    reportFigure: 3,
    dark: false,
    alt: 'Terminal: curl requests /jobs with name=../../../../etc/passwd. The response is the contents of /etc/passwd, ending with the nobody, root and daemon account lines.',
    caption:
      'The ../ payload escapes the jobs folder and returns /etc/passwd over HTTP. On macOS this file holds no real passwords, which made it a safe target for the demonstration.',
    highlights: [{ top: 77.68, height: 21.88 }],
  },
  sqli: {
    src: figSqli,
    reportFigure: 4,
    dark: true,
    alt: 'Terminal: three curl requests to /reports. owner=alice returns one row. The un-encoded payload returns nothing. The URL-encoded payload returns two rows, vacation.jpg and diagram.png.',
    caption:
      'owner=alice returns one row. The middle request returns nothing because the shell mangled the quotes before curl sent them. The URL-encoded payload reaches the server intact and returns both users’ rows.',
    highlights: [{ top: 66.67, height: 32.58 }],
  },
  path: {
    src: figPath,
    reportFigure: 5,
    dark: true,
    alt: 'Terminal: a curl request to /trim?file=test.jpg returns “PWNED: attacker-controlled binary ran as salahmatine” instead of trimmed metadata. Two “command not found” lines appear above it.',
    caption:
      'A normal /trim request runs the planted binary instead of the real helper. The two “command not found” lines are unrelated shell noise from a pasted prompt, left in rather than edited out of the evidence.',
    highlights: [{ top: 73.17, height: 24.39 }],
  },
} satisfies Record<string, Evidence>

export const snapstore: CaseStudy = {
  slug: 'snapstore',
  title: 'Snapstore security assessment',
  standfirst:
    'An authorised, local assessment of snapstore, a deliberately vulnerable practice service written in Go, C, Rust and Python. I reviewed the source with AI assistance, reproduced five findings against the running service, and wrote each one up with its evidence, its fix and the limits of what I proved.',
  description:
    'Five reproduced findings in a deliberately vulnerable Go, C, Rust and Python service: SSRF, a stack buffer overflow, path traversal, SQL injection and untrusted PATH resolution. With evidence, fixes and limits.',
  type: 'lab',
  meta: [
    { label: 'Target', value: 'snapstore (r2c-mock-polyglot)' },
    { label: 'Environment', value: 'Authorised local lab' },
    { label: 'Date', value: 'August 2026' },
    { label: 'My role', value: 'Review, reproduction and write-up, with AI assistance during review' },
  ],
  links: [
    { label: 'Read the report (PDF)', href: REPORT },
    { label: 'View the repository', href: REPO },
  ],

  findings: [
    { n: 1, title: 'Server-side request forgery', where: 'gateway/main.go, /import', proven: 'Live gateway', rating: 'High' },
    { n: 2, title: 'Stack buffer overflow', where: 'native/exiftrim/src/main.c, via /trim', proven: 'Helper binary, then live gateway', rating: 'High', ratingNote: 'crash only' },
    { n: 3, title: 'Path traversal', where: 'worker/src/main.rs, via /jobs', proven: 'Helper binary, then live gateway', rating: 'High' },
    { n: 4, title: 'SQL injection', where: 'report/report.py, /reports', proven: 'Live gateway', rating: 'High' },
    { n: 5, title: 'Untrusted PATH resolution', where: 'gateway/main.go, child processes', proven: 'Live gateway, with the PATH precondition set up', rating: 'Conditional' },
  ],

  sections: [
    {
      id: 'scope',
      title: 'Scope',
      blocks: [
        {
          kind: 'p',
          text: 'snapstore is a small artifact-ingest service. An HTTP gateway written in Go hands work to helpers written in C, Rust and Python. It is deliberately vulnerable, built for practice, and I ran it locally.',
          note: { label: 'Context', text: 'A practice target, not a client engagement. None of this says anything about real users or real systems.' },
        },
        {
          kind: 'list',
          items: [
            'In scope: every source file, reviewed statically, and the live HTTP gateway, used to validate each finding.',
            'Out of scope: any production deployment and any third-party infrastructure.',
          ],
        },
      ],
    },
    {
      id: 'approach',
      title: 'How I worked',
      blocks: [
        {
          kind: 'p',
          text: 'I read every file in the repository, using AI assistance alongside my own review to locate candidate issues. The vulnerable files also carried inline CWE comments (CWE-918, 120, 22 and 89) naming four of the vulnerability classes, so I don\u2019t claim to have found those classes unaided.',
          note: { label: 'Disclosure', text: 'The AI assistance and the CWE comments are both disclosed in the report itself.' },
        },
        {
          kind: 'p',
          text: 'My work was proving them. For each candidate I wrote a request, sent it to the running service and kept the output. SSRF and SQL injection were driven entirely through the live gateway. The buffer overflow and path traversal were first proven against the helper binaries directly, then proven again end to end through the gateway\u2019s `/trim` and `/jobs` endpoints, so each one is shown to be reachable over HTTP rather than only in isolation.',
        },
        {
          kind: 'p',
          text: 'I also reviewed the one shell script in the repository, `scripts/refresh.sh`. It resets the repo and has no attacker-reachable input.',
        },
      ],
    },
    {
      id: 'findings',
      title: 'Findings',
      blocks: [
        { kind: 'p', text: 'Five confirmed findings. The first four are reachable without authentication. Ratings are my own judgement, as written in the report, not CVSS scores.' },
        { kind: 'findings' },
      ],
    },
    {
      id: 'finding-1',
      number: 1,
      title: 'Server-side request forgery',
      meta: [
        { label: 'Location', value: 'gateway/main.go, /import', mono: true },
        { label: 'Rating', value: 'High' },
        { label: 'Proven through', value: 'The live gateway' },
      ],
      blocks: [
        {
          kind: 'p',
          text: 'The `/import` endpoint fetches whatever URL the caller supplies, with no restriction on where it points. An attacker can make the server send requests on their behalf, including to internal systems they couldn\u2019t reach directly.',
        },
        { kind: 'code', label: 'gateway/main.go', code: 'sourceURL := r.URL.Query().Get("url")\nresponse, err := http.Get(sourceURL)' },
        {
          kind: 'code',
          label: 'Request',
          code: 'curl -s "http://127.0.0.1:8080/import?url=http://127.0.0.1:8080/nope"',
          note: { label: 'Limit', tone: 'limit', text: 'Only http and https were reachable. file:// was rejected, so this could not read local files directly.' },
        },
        { kind: 'figure', figure: 'ssrf' },
        {
          kind: 'list',
          heading: 'Fix',
          items: [
            'Validate the destination against an allowlist and block internal and private address ranges such as 127.0.0.1, 10.x and 169.254.x.',
            'Don\u2019t let the caller control the full outbound URL. Set a timeout and turn off automatic redirects, so an allowed host can\u2019t redirect the request into internal space.',
          ],
        },
      ],
    },
    {
      id: 'finding-2',
      number: 2,
      title: 'Stack buffer overflow',
      meta: [
        { label: 'Location', value: 'native/exiftrim/src/main.c, via /trim', mono: true },
        { label: 'Rating', value: 'High, remote crash confirmed' },
        { label: 'Proven through', value: 'The helper binary, then the live gateway' },
      ],
      blocks: [
        {
          kind: 'p',
          text: 'The C helper copies the requested filename into a fixed 64-byte buffer with `strcpy`, which never checks the length. A longer filename overwrites neighbouring memory on the stack, including the value the program uses to know where to return to.',
        },
        { kind: 'code', label: 'native/exiftrim/src/main.c', code: 'char local_path[64];\nstrcpy(local_path, requested_file);' },
        {
          kind: 'code',
          label: 'Requests',
          code: '# normal request\ncurl -s "http://127.0.0.1:8080/trim?file=test.jpg"\n\n# overflow request (200 A\u2019s)\ncurl -s "http://127.0.0.1:8080/trim?file=$(python3 -c \'print("A" * 200)\')"',
        },
        { kind: 'figure', figure: 'overflow' },
        {
          kind: 'p',
          text: 'The \u201ctrace trap\u201d, rather than a plain crash, is macOS\u2019s stack canary detecting the corruption before the function returns.',
          note: {
            label: 'Limit',
            tone: 'limit',
            text: 'What this proves is a remote crash: a denial of service reachable over HTTP. Code execution was not demonstrated, and I did not inspect the built binary\u2019s mitigations.',
          },
        },
        {
          kind: 'p',
          text: 'The Makefile compiles with `-O2 -g -Wall` and sets no explicit hardening flags. Platform defaults may still add some protection, which is likely why the crash was caught, so I treat this as a reduced safety margin rather than proof that the binary is unprotected.',
        },
        {
          kind: 'list',
          heading: 'Fix',
          items: [
            'Use `snprintf` with an explicit length, or reject any filename longer than the buffer. `strncpy` isn\u2019t a clean fix, because it can leave the string without a terminating null.',
            'Add `-fstack-protector-strong`, `-D_FORTIFY_SOURCE=2` and `-fPIE -pie` to the Makefile.',
          ],
        },
      ],
    },
    {
      id: 'finding-3',
      number: 3,
      title: 'Path traversal',
      meta: [
        { label: 'Location', value: 'worker/src/main.rs, via /jobs', mono: true },
        { label: 'Rating', value: 'High' },
        { label: 'Proven through', value: 'The helper binary, then the live gateway' },
      ],
      blocks: [
        {
          kind: 'p',
          text: 'The Rust worker joins a fixed jobs folder with the job name from the request, then returns the file\u2019s contents. It never checks the name for `../`, so a request can climb out of the folder and read any file the worker can.',
        },
        { kind: 'code', label: 'worker/src/main.rs', code: 'let job_path = Path::new("/var/lib/snapstore/jobs").join(job_name);\nfs::read_to_string(job_path)' },
        { kind: 'code', label: 'Request', code: 'curl -s "http://127.0.0.1:8080/jobs?name=../../../../etc/passwd"' },
        { kind: 'figure', figure: 'traversal' },
        {
          kind: 'p',
          text: 'As well as the relative form, `Path::join` discards the base folder entirely when given an absolute path, so `name=/etc/passwd` works too.',
          note: { label: 'Setup', text: 'The jobs folder has to exist for the relative path to resolve. I created it once during earlier direct testing.' },
        },
        {
          kind: 'list',
          heading: 'Fix',
          items: ['Reject job names containing `../` or absolute paths, or resolve the final path and check it is still inside the jobs folder before reading it.'],
        },
      ],
    },
    {
      id: 'finding-4',
      number: 4,
      title: 'SQL injection',
      meta: [
        { label: 'Location', value: 'report/report.py, /reports', mono: true },
        { label: 'Rating', value: 'High' },
        { label: 'Proven through', value: 'The live gateway' },
      ],
      blocks: [
        {
          kind: 'p',
          text: 'The Python report script builds its query by joining the `owner` value straight into the SQL string. Nothing separates the query from the input, so a crafted value changes what the query does.',
        },
        { kind: 'code', label: 'report/report.py', code: 'query = "SELECT name, created_at FROM snapshots WHERE owner = \'" + owner + "\'"' },
        {
          kind: 'code',
          label: 'Request (URL-encoded \u2019 OR \u20191\u2019=\u20191)',
          code: 'curl -s "http://127.0.0.1:8080/reports?owner=alice%27%20OR%20%271%27%3D%271"',
          note: { label: 'Worth knowing', text: 'Sent un-encoded, the payload looked like a failed injection. It was the shell eating the quotes, not the application.' },
        },
        { kind: 'figure', figure: 'sqli' },
        {
          kind: 'list',
          heading: 'Fix',
          items: ['Use a parameterised query, so the input is always treated as data and never as SQL.'],
        },
        { kind: 'code', label: 'Parameterised version', code: 'database.execute("SELECT name, created_at FROM snapshots WHERE owner = ?", (owner,))' },
      ],
    },
    {
      id: 'finding-5',
      number: 5,
      title: 'Untrusted PATH resolution leading to code execution',
      meta: [
        { label: 'Location', value: 'gateway/main.go, child-process calls', mono: true },
        { label: 'Rating', value: 'Conditional (High only with write access to an early PATH directory)' },
        { label: 'Proven through', value: 'The live gateway, with the precondition set up' },
      ],
      blocks: [
        {
          kind: 'p',
          text: 'The gateway starts its helpers by bare name. When a name has no path separator, Go\u2019s `exec.Command` searches `$PATH` and runs the first match, so whoever controls a directory early on the service\u2019s PATH controls which binary runs.',
        },
        {
          kind: 'code',
          label: 'gateway/main.go',
          code: 'exec.Command("exiftrim", r.URL.Query().Get("file"))\nexec.Command("worker",   r.URL.Query().Get("name"))',
          note: {
            label: 'Condition',
            tone: 'limit',
            text: 'Not a standalone remote exploit. The attacker must already be able to write to a directory early on the service\u2019s PATH. Without that foothold, the gateway runs the correct binary.',
          },
        },
        {
          kind: 'p',
          text: 'To stand in for an attacker-writable PATH directory, I placed a fake `exiftrim` in `/tmp` that prints a marker, and started the gateway with `/tmp` ahead of the real binary on its PATH. No code in the gateway or the real binary was changed.',
        },
        {
          kind: 'code',
          label: 'Setup and request',
          code: '# fake binary (prints a marker instead of trimming)\ncat > /tmp/exiftrim << \'EOF\'\n#!/bin/bash\necho "PWNED: attacker-controlled binary ran as $(whoami)"\nEOF\nchmod +x /tmp/exiftrim\n\n# gateway started with /tmp first on PATH, then a normal request:\ncurl -s "http://127.0.0.1:8080/trim?file=test.jpg"',
        },
        { kind: 'figure', figure: 'path' },
        {
          kind: 'list',
          heading: 'Fix',
          items: [
            'Call helpers by absolute path, for example `/usr/local/libexec/snapstore/exiftrim`. The Makefile already defines that install location; the gateway just never uses it.',
            'Where a lookup can\u2019t be avoided, give the child process an explicit, trusted PATH instead of inheriting one.',
          ],
        },
      ],
    },
    {
      id: 'observations',
      title: 'Minor observations',
      blocks: [
        { kind: 'p', text: 'These don\u2019t rise to findings, but they\u2019re worth recording.' },
        {
          kind: 'list',
          items: [
            'Verbose errors. The gateway reflects raw downstream errors back to the caller, including SQLite messages, fetch errors and filesystem paths. That helps an attacker and amplifies the SQL injection and path traversal findings.',
            'Unenforced HTTP methods. The README documents specific methods, but a single handler answers any method: `/jobs` worked with a GET. With no authentication anywhere the impact is negligible, but the documented restrictions aren\u2019t real.',
            'No third-party dependencies. The Go, Rust and Python manifests declare no external packages, so there is no supply-chain surface to review. A positive.',
          ],
        },
      ],
    },
    {
      id: 'limitations',
      title: 'Limitations',
      blocks: [
        {
          kind: 'list',
          items: [
            'This is a deliberately vulnerable practice service, run locally. It is not a production system or a client engagement.',
            'CWE comments in the source named four of the vulnerability classes. What this work adds is reproduction and evidence, not discovery from nothing.',
            'The buffer overflow is proven as a remote crash only. Confirming exploitability would need a look at the built binary\u2019s mitigations, for example with checksec or otool, which I didn\u2019t do.',
            'The PATH finding depends on a precondition I created myself to stand in for an attacker\u2019s foothold.',
            'Ratings are my own judgement, not CVSS scores.',
          ],
        },
      ],
    },
    {
      id: 'learned',
      title: 'What I took from it',
      blocks: [
        {
          kind: 'list',
          items: [
            'A bug in a helper binary isn\u2019t the same as a bug an attacker can reach. Re-running the overflow and the traversal through the gateway is what made them HTTP findings.',
            'A crash isn\u2019t code execution. I wrote the overflow up as what I proved, and named the check that would take it further.',
            'Tooling can mislead you. The un-encoded SQL payload looked like a failure until I realised the shell had mangled the quotes.',
            'Preconditions belong in the finding, not in a footnote. The PATH issue leads with its condition because the rating depends on it.',
          ],
        },
      ],
    },
  ],
}
