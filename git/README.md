# Git

Git is a distributed version control system. It keeps a copy of different versions of a project making a lot of things convenient for developers working together on certain proojects. This copy of different versions of a project is known as a repository (repo). Now git is called distributed because this copy of history of project files or versions can be present on different systems and does not have to be on one central machine to work. So if something were to happen to one machine, the contents won't be entirely lost and they can be copied from somebody else's machine. Now each time we complete some changes to our project files, we can take a snapshot of their current contents and this snapshot is called a commit. 

Git commands function with the git executable in the command line. And is followed by a subcommand(add,pull,push,etc.) and options(- followed by a single letter or -- followed by a word)

The most command git commands are : 

1. git init/git clone : To setup repositores
2. git status: Used to find what state our project files are in. It lists all untracked files as well, and also provides hints for the commands that can be used next.
3. git add : Used to add files to the staging area
4. git commit : Used to commit files to the repo's version history. It is mandatory to add a message with each commit, more of a brief note to state what the commit is doing. We can either use the -m option to do it in command line in the same command itself by hitting a message in quotes or leave the option and move into vi or any default editor set for git.
5. git log : Shows the history of the project files. For each commit it shows the author name and email. Date and time of the commit. The commit message. -p would show the lines changed in the commit as well.
6. git mv/git rm
7. git push/git pull
8. git diff : Allows us to look at the difference between the modified files and files in the staging area, and if staging area is empty then we get comparison with the last made commit. - for deleted lines, ++ for new added line and both - and + for modified lines with both versions. Has --staged option. If we have staged our changes, then there are no changes between the modified and the staged version and the diff commands returns empty. But if we want to compare the staged version with the last commit, then we use this flag. 
For files that are already tracked by git. git commit -a -m "message" stages and commits all files in the directory in one command. 

It is important to keep the concept of modified area, staging area and commit area in mind while working with git, since we move our files between these areas to maintain their versions properly. These are also called file statuses. When we make changes to a file in the working directory, its modified. We donot need to commit all modified files in one commit, there could be a certain situation when I want certain changes to be part of one commit and other changes to be part of other commits. So we have the option of selecting which ones to commit when, hence we can put the files to be commited to a file index, commonly called the staging area. These files are called staged files. When all required files are added to the staging area, we can make the commit we need to make and after the commit, these changes become a part of the repository. If any changes are made to these files again, then we consider them modified again. And the same cycle goes on.

While setting up git, git needs to know the username and email, so that they can be attached to the commit, which allows people to contact the person needed incase. These can be added as a part of git's configuration on a user's local machine using the following commands.
```git
git config --global user.email "jay.mcgavren@teamtreehouse.com"
git config --global user.name "Jay McGavren"
```

Topics covered:
1. Basic commands 
2. Remote repos
3. How to push and pull to remote repos
4. Remote repos on the same machine
5. Good practices
6. Git hosting services and how to collaborate
7. Branching 
8. Merging 

