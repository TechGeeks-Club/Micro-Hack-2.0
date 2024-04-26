# Micro-Hack-2.0

## Branching Convention
We follow a branching convention to manage our codebase effectively. The convention is as follows:

- `main`: The main branch that represents the production-ready code.
- `dev`: The development branch where new features are integrated and tested.
- `feature/[b/f]-your-feature`: Branches  for developing new features. ex: `feature/f-leaderboard-points`
- `bugfix/[b/f]-your-bugfix`: Branches  for fixing bugs. ex: `bugfix/b-upload-file`
- `refactor/[b/f]-your-refactor`: Branches for refactoring existing code to improve readability, maintainability, or performance.Ex:`refactor/b-database-optimization`
- `conf/[b/f]-your-conf`: Branches  for conficurations . `conf/b-django-chanels`
- `hotfix/[b/f]-your-hotfix`: Branches created for critical bug fixes in the production code. These branches are created from the `main` branch and merged back into it once the hotfix is complete.

When creating a new branch, make sure to give it a descriptive name that reflects the purpose of the branch. For example, if you are working on a feature to add user authentication, you can create a branch named `feature/b-user-authentication`.

It is important to follow this branching convention to ensure a smooth and organized development process. By using separate branches for different features and bug fixes, we can easily track changes, collaborate effectively, and maintain a stable codebase.

## initial Setup

1. make migrations & migrate :

    ```bash
    python manage.py mkemigrations
    python manage.py migrate
    ```

2. initialize the database :

    ```bash
    python manage.py loaddata src/init_data.json 
    ```

3. run server :

    ```bash 
    python manage.py runsever
    ```




# ***NOTE*** : TO fill up the data base inter your  data in `init_data.json` and run 


```sh
python manage.py shell
```

```py 
from django.core.management import call_command
call_command('loaddata', 'init_data.json', verbosity=1)
```