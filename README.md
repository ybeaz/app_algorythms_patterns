`blabla` = "blabla"

`>` - nest step

This is repository for learning Javascript, Typescript, algorythms, programming patterns

## How to

### How to install git on Windows 

1. CMD > `winget install --id Git.Git -e --source winget` 
2. automatic installing 

### How to generate SSH key

1. [info] Browser > https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
2. Terminal > `ssh-keygen -t ed25519 -C "your_yourEmail!!!!"` (instead of yourEmail!!!! - write your email) [generate SSH keys]
3. Finder > folder admin > shift + command + `.` > `.ssh` > check keys (2 files with names which includes numbers. For example `id_ed25519.pub`)

### How to connect Github to terminal

ls - all files
pwd - where we are now
cd - change folder to another current folder. (for example: cd Dev - change to Dev)

1. Finder > folder admin > shift + command + `.` > `.ssh` > `id_ed25519.pub` click right (Open in VScode)
2. Vscode > copy text
3. Browser > `https://github.com/settings/keys` > click `new SSh key (right side, up)` > create title (Any) > paste text (step 2) > `add SSH key`

### How to clone repository

1. Terminal > paste `eval $(ssh-agent -s); ssh-add ~/.ssh/id_ed25519`
2. Terminal > paste `git clone git@github.com:ybeaz/app_ts_algorythms_patterns.git`

### How to indtall npm modules

1. Terminal > `nvm use v20.18.0`
2. Terminal > `yarn`

### How to run your first function

1. VSCode > `src/student/__tests__/getSum.test.ts`
2. Terminal > cd > `/Users/admin/Dev/app_ts_algorythms_patterns`
3. Terminal > `yarn jest getSum.test.ts --coverage --collectCoverageFrom="src/student/algorythms/getSum.ts"`

### Repo IDs

https://github.com/ybeaz/app_ts_algorythms_patterns
git@github.com:ybeaz/app_ts_algorythms_patterns.git
eval $(ssh-agent -s); ssh-add ~/.ssh/rsa-key-name

### Git basic commands

git clone git@github.com:ybeaz/app_ts_algorythms_patterns.git
git remote add origin git@github.com:ybeaz/app_ts_algorythms_patterns.git
git remote set-url --push origin git@github.com:ybeaz/app_ts_algorythms_patterns.git;
git remote set-url origin git@github.com:ybeaz/app_ts_algorythms_patterns.git
git checkout -b B-0.1.0 develop; git push origin B-0.1.0;
git add -u
git commit -m 'perf(feat): add repo'
git push origin B-0.1.0
