# Git

Git is a distributed version control system. It keeps a copy of different versions of a project making a lot of things convenient for developers working together on certain proojects. This copy of different versions of a project is known as a repository (repo). Now git is called distributed because this copy of history of project files or versions can be present on different systems and does not have to be on one central machine to work. So if something were to happen to one machine, the contents won't be entirely lost and they can be copied from somebody else's machine. Now each time we complete some changes to our project files, we can take a snapshot of their current contents and this snapshot is called a commit. 

Git commands function with the git executable in the command line. And is followed by a subcommand(add,pull,push,etc.) and options(- followed by a single letter or -- followed by a word)

The most command git commands are : 

1. git init/git clone : To setup repositores
2. git status: Used to find what state our project files are in. It lists all untracked files as well, and also provides hints for the commands that can be used next.
3. git add : Used to add files to the staging area
4. git commit : Used to commit files to the repo's version history. It is mandatory to add a message with each commit, more of a brief note to state what the commit is doing. We can either use the -m option to do it in command line in the same command itself by hitting a message in quotes or leave the option and move into vi or any default editor set for git.
5. git log : Shows the history of the project files. For each commit it shows the author name and email. Date and time of the commit. The commit message. -p would show the lines changed in the commit as well.
6. git mv/git rm : Moving or removing a file in the repo with the git, adds the changes directly to the staging area and will be needed to be commit after that. Without git executable, we need to separately add them to the staging area and then the commit area. 
7. git push/git pull
8. git diff : Allows us to look at the difference between the modified files and files in the staging area, and if staging area is empty then we get comparison with the last made commit. - for deleted lines, ++ for new added line and both - and + for modified lines with both versions. Has --staged option. If we have staged our changes, then there are no changes between the modified and the staged version and the diff commands returns empty. But if we want to compare the staged version with the last commit, then we use this flag. 
For files that are already tracked by git. git commit -a -m "message" stages and commits all files in the directory in one command. 

It is important to keep the concept of modified area, staging area and commit area in mind while working with git, since we move our files between these areas to maintain their versions properly. These are also called file statuses. When we make changes to a file in the working directory, its modified. We donot need to commit all modified files in one commit, there could be a certain situation when I want certain changes to be part of one commit and other changes to be part of other commits. So we have the option of selecting which ones to commit when, hence we can put the files to be commited to a file index, commonly called the staging area. These files are called staged files. When all required files are added to the staging area, we can make the commit we need to make and after the commit, these changes become a part of the repository. If any changes are made to these files again, then we consider them modified again. And the same cycle goes on.

While setting up git, git needs to know the username and email, so that they can be attached to the commit, which allows people to contact the person needed incase. These can be added as a part of git's configuration on a user's local machine using the following commands.
```git
git config --global user.email "jay.mcgavren@teamtreehouse.com"
git config --global user.name "Jay McGavren"
```

Unstaging commits : To unstage commits we need to run the command ```git reset HEAD filename``` . This command will move the file from staging area back to to be staged area. Also doesn't really need to be remembered. Git will help us with that. 

To go back to the original config in local repo after making modifications. We can use ```git checkout -- filenames```. Takes them out of the modification area or in a way removes them entirely from the directory. This can't be undone. It is really moving files back to their last committed versions. Here -- acts as a seperator and not an option. git checkout works with deleted files as well, as long as they were tracked or were part of the repo before.

Commit SHAs and undoing commits : A commit is represented using the SHA-1 checksum of all the changes made in that commit. It looks something like this "1d8e15a834a2157fe7af04421c42a893e8a1f23a". This checksum obviously uniquely identifies a commit. These are used to select commits whenever needed. Git allows us to abbreviate SHAs with the first 5 symbols of the SHA. We can use ``` git revert commitSHA ``` to undo changes made in that commit. HEAD refers to the most recent commit. So ```git revert HEAD ``` undoes the last changes made to the repo. 

Working with other developers using git : Concept of local, remote and central repos. Our own copy of the repo is called local repo. Repos belonging to other developers are called remote repos. It is very common practice to declare one repo as the central repo where all work is synced and from other developers can pull changes from and push changes to. Rather than pushing and pulling individually to other repos, this happens to be much more convenient but that does not mean the other way round isn't possible. But this concept of central repos is central to the idea of many git hosting services like github, bitbucked and gitlab. 

To pull changes from a remote repo, it is important for it to be set up or linked to our repo. These linked repos are called remote repos. To list all linked repos we need to go with ```git remote``` . The repo we clone from is automatically added by the name of origin (The reverse is not true). We do git pull origin to pull changes from origin to our repo. 

To add a remote repo, we use ```git remote add name_to_given_to_the_remote_repo remote_repo_URL ```. To pull from this repo we need to specify two commands. The remote reference and the branch to pull from.

Git push can be used to push the changes we make to git hosting services. To push changes we need to make a new repo on github and set it up as a remote for our local repo. ```git push -u origin master``` is the command used to push to the central repo. -u option is to set this repo as upstream with branch master. In the future we can just specify git push and it will push to origin automatically. Other people won't be able to push to our repo until they fork it and push to that and then initiate a pull request. 
 
**Note:** Atlasian has very good tutorials on git.
Topics covered:
1. Basic commands 
2. Remote repos
3. How to push and pull to remote repos
4. Remote repos on the same machine
5. Good practices
6. Git hosting services and how to collaborate
7. Branching 
8. Merging 

