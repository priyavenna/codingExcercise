153 ======> docker ps (for listing running docker containers)
            docker rm -f 1234(docker contaier number)(terminate one docker container)
            docker rm -f $(docker ps -aq)(terminates all docker containers)

154 =======> docker exec -it <container name> /bin/bash 

161 =====> git diff-tree --no-commit-id --name-only -r 717e57514be74cd6643392c49e3d668c9a62a605 (commit number)

162======> git show 717e57514be74cd6643392c49e3d668c9a62a605 (commit number)

163======> GIT FETCH :-> git fetch is used to update your remote - tracking branches under refs/remote
           GIT PULL :-> git pull is used to bring branch up to date with its remote version, which also updates other remote-tracking branches
           Bascially git pull is equivalent to git fetch and git merge

164======> git push -u origin master (will push all the committed changes from local to remote repository)

165======> git push origin --delete feature1 (branch name)

166======> 1.1 git init
           1.2 git clone git@github.com:priyavenna/codingExcercise.git
           1.3 git checkout -b develop (branch name)
           1.4 git add new.js (file name)
           1.5 git commit -m "commit message"
           1.6 git push origin master