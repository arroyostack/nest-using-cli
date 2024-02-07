1. Make sure you install the project with sudo
2. If CLI is not installed

```
sudo npm install -g @nestjs/cli

```

3.Create Nest project

```
nest new messages
```

4. disable/cooment eslint
5. Delete app. related files. Leave only main.ts
6. Generate desired module with your module name excluding te keyword "module"

```
nest generate module messages
```

7. generate controller with desired name

```
nest generate controller messages/messages --flat
```
