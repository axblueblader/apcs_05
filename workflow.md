# Git work flow

At this moment i hope that everyone has done the exercise at [Git exercise](https://gitexercises.fracz.com/) (if you did not, you should, now). After knowing some of the basic Git command, it is time to introduce the workflow (i.e how we will work together, branches definition).

This will be a summary [this topic](https://nvie.com/posts/a-successful-git-branching-model/) by Vincent Driessen (not the guy from FF).

## Main branches

+ `master`: stable release, what will other people will clone and use.
+ `develop`: lasted changes for the next release into `master`.

Always tag a release when merge into `master` (aka version number).

## Supportin branches

+ `feature`: where we work the most, branch off from `develop`, exist locally. If many people need to work on the same feature, `fetch` each other.
+ `release`: contains the next release, allow `develop` branch to continue develop for further future release, branch off `develop` and merge back to `master` or `develop`.
+ `hotfix`: fix bug which we already publish in master, branch from `master` and merge back to `master` and `develop` (we want both branches to be fixed).

## Nameing convention

+ Local repo should be named by your true name.
+ Branches: `[branch-type]-[short-description]`. Ex: feature-voice-chat, hotfix-pairing-bug. There will only one `develop`, `release`, `master` so only `feature` and `hotfix` is allowed to be created.

## Workflow

### Working with feature

1. Check feature cards on [Trello](https://trello.com/b/cunzSpxv/apcs05).
2. Create new feature branch in local repo.
  
        git checkout -b feature-xxx develop
Translate: Create new branch named `feature-xxx` branch off `develop`.
3. Work on the feature.
4. When finish, push to remote repo.

        git checkout develop #switch to develop branch
        git merge --no-ff feature-xxx #merge feature-xxx into current branch (develop) in no fast forward mode
        git branch -d feature-xxx #remove branch pointer feature-xxx
        git push origin develop #create pull request to develop
5. Create pull request on Github.

### Working with bug

1. Check issue on Github or bug card on [Trello](https://trello.com/b/cunzSpxv/apcs05).
2. Work the same as feature, but branch from where the bug is found and push back into it. Create pull request as usual.