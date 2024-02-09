# Sharepoint links
## Local development
- Install node 16.20
- You can use a node version manager `nvm` for this. [Link](https://github.com/nvm-sh/nvm)

## Install Node 16.20
Assuming you have already installed NVM. Run this commmand.
```bash
nvm install 16.20
```
Select `node 16.20` like this.
```bash
nvm use 16.20
```

## Other requirements.
```bash
npm install gulp-cli --global
npm install yo --global
npm install @microsoft/generator-sharepoint --global
```
INstall all the other dependencies.
```bash
npm install
```
Install dev trust cert
```bash
gulp trust-dev-cert
```
You can now make changes to the code. And run the serve command to view them.  
Serve command
```bash
gulp serve
```
Bundle
```bash
gulp bundle
```
Package
```bash
gulp package-solution
```
the package command will create a `.sppkg` file that you can upload to sharepoint.  
Locate the sharepoint admin center to upload the solution file.  
Once there head to more features. And locate the apps section.  
Upload the newly generated `.sppkg` file.
