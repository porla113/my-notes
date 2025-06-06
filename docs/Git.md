# Git
## Command
### Setup

|Command|Description|
|---|---|
|`git config --global user.name "John Doe"`|Set user name.|
|`git config --global user.email "johndoe@example.com"`|Set email, must match with Github account.|
|`git init`|Initialize a reository.|
### General

|Command|Description|
|---|---|
|`git status`|Check the status of files.|
|`git add *.txt`|Track/add files to stage.|
|`git commit -m "message"`|Commit with message.|
### Caution

|Command|Description|
|---|---|
|`git reset --hard HEAD`|Revert to the latest commit.|
|`git clean -ndf`|List untracked files and directories to be remove.|
|`git clean -df`|Force to remove untracked files and directories.|