# Github Packages Manager

## Introduction

github-packages-manager is a client-side application to manage github packages. It uses [GitHub GraphQL API
](https://docs.github.com/en/graphql) to fetch and display the list of packages and [GitHub GraphQL Preview API](https://docs.github.com/en/enterprise-server@3.0/packages/learn-github-packages/deleting-a-package#deleting-a-version-of-a-private-package-with-graphql)
for deletion. Because of it was made for my own needs only, it has a very limited set of functionalities.

## Create a personal access token
Generate a new one by following these instructions https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql

Request the following scope to be able to delete packages: `delete:packages`. 