## SETUP

I have this website divided into two different repositories for environment reasons...
1. https://github.com/NJDaeger/gatsby-playground (TEST)
2. https://github.com/NJDaeger/Greenfield-Website (PROD)

These repos have specific usages. The first repo listed is for the test environment... https://test.greenfieldmc.net and the next repo is for prod.

## Setting up your dev environment
1. Clone the TEST repo ``git clone https://github.com/NJDaeger/gatsby-playground.git``
2. In the cloned folder, create two remotes, one for TEST and one for PROD:
  - ``git remote add test https://github.com/NJDaeger/gatsby-playground.git``
  - ``git remote add prod https://github.com/NJDaeger/Greenfield-Website.git``
3. Set your branch 