# Github Packages Manager

## Introduction

github-packages-manager is a client-side application to manage GitHub packages. It uses [GitHub GraphQL API
](https://docs.github.com/en/graphql) to fetch and display the list of packages and [GitHub GraphQL Preview API](https://docs.github.com/en/enterprise-server@3.0/packages/learn-github-packages/deleting-a-package#deleting-a-version-of-a-private-package-with-graphql)
for deletion. Because of it was made for my own needs only, it has a very limited set of functionalities.

It may be very useful for Java projects managed with maven having multi modules hence multiple Java artifacts. 

## Create a personal access token
To communicate with the GraphQL server, you'll need a token with the right scopes. Generate a new one by following those instructions https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql

Request the following scope to be able to delete packages: `delete:packages`. 

The token **will only be used to communicate with GitHub servers**. The deployed javascript files are not minimified to let you inspect the code if you want (/docs directory).

## Usage

<img width="917" alt="Screen Shot 2021-06-22 at 11 48 31 AM" src="https://user-images.githubusercontent.com/5783183/122885506-33830100-d350-11eb-84b6-087e434f4d82.png">

Fill in the form (three fields) and click _Fetch_ to fetch the list of available packages. To fetch and display the list of versions, simply expand the package node
in the tree. Query results are paginated (max page size is 100 as per Github specification).

<img width="1035" alt="Screen Shot 2021-06-22 at 12 07 58 PM" src="https://user-images.githubusercontent.com/5783183/122888063-8bbb0280-d352-11eb-85f6-4d571434e147.png">

Select the versions you want to delete and click _Delete_. A confirmation modal will appear:
<img width="948" alt="Screen Shot 2021-06-22 at 12 09 09 PM" src="https://user-images.githubusercontent.com/5783183/122888405-e6ecf500-d352-11eb-985a-337b947b3173.png">

Package versions will be immediately deleted once _Confirm_ is clicked.

The icon :checkered_flag: next to a version enables you to select all similar versions (having the same name) for each package.

## Demo
![ezgif com-gif-maker](https://user-images.githubusercontent.com/5783183/123049621-ce431480-d410-11eb-89ee-6c913398a004.gif)

