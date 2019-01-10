# Git

1. Git is a version control system. It helps you control the different versions of the files in your project.
2. The collection of all the old versions of your project's files is known as a Git repository. (Basically just a folder in which you can edit your files, then run Git commands to store your changes.)
3. Each time you complete a change to some or all of your project's files, you can take a snapshot of their current contents. These snapshots are known as __commits__.
4. Git is a distributed version control system, as opposed to a centralized system. In a distributed system, you can copy a complete repository with the full project history to every developer's machine.
5. When Git is installed on a system, it places an executable named git where it can be run from any shell prompt. This is the git command.
6. Then we need to specify the subcommand or options we want. Git command line options consist of either a single dash followed by a single letter, or a double-dash [type --] followed by a word.
9. git --help will print out some help on using the Git program.

## Common Git subcommands

1. The git clone and git init commands are used to set up new repositories.
2. The git add, git status, and git commit commands are the most frequently used subcommands in all of Git. They're used when committing new versions of files.
3. The git log command is also important; it lets you view a list of your old commits.
4. The git mv and git rm commands move and remove files that are being tracked by Git. 
5. The git push and git pull commands are used to synchronize commits with Git repositories on other computers. 

## File statuses

There are three states every file goes through in a Git repository. 

1. When you make changes to a file in the working directory, it's "modified".
2. You don't necessarily want to include all of these modified files in your next commit, so you need to specify which ones you will include. You do this by adding files to the index, more commonly known as the "staging area" or "cache". The staging area is where you place the files you're going to commit. Files you've added to the index are referred to as "staged" files.
3. When you've staged all the files you want, you make a commit, and that's when the files are actually added to your Git repository.
4. Then, when you next make a change to any of those files, they're treated as "modified" again. You can stage and commit the files again to save a new version of them. And the cycle repeats.

