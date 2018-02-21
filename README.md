# AdminLTE Pack

This repository is a web framework include some popular javascript libraries based on AdminLTE.

## Prerequisite

* Nodejs

use latest lte version is good. we recommend use nvm to management your nodejs.

* NuGet

if you build a nuget package for asp.net mvc project.

## Getting started


* Get the git submodules

    git submodule update --init --recursive

* install packages

    npm install

## Build NuGet package for asp.net mvc project

* For empty project

    nuget pack AdminLTE-Pack.nuspec

* For Abp project

    nuget pack Abp-AdminLTE-Pack.nuspec