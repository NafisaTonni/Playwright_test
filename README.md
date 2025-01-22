# Setup in Mac

- Important platform is [Node JS , VS Code, [Playwright Documentation](https://playwright.dev/docs/intro)]
- Installation Playwright:
    - install using terminal  as npm package
    - **Step 1:** Create a folder in desktop and open this folder in VS Code
    - **Step 2:** go to terminal and run those command  -
        
        ```basic
        pwd
        ```
        
        ```basic
        cd Desktop
        ```
        
        ```basic
        cd [folder name which is create for playwright]
        ```
        
        ```basic
        pwd
        ```
        
        ```basic
        **npm init playwright@latest** 
        ```
        
        Run the install command and select the following to get started:
        
        - Choose between TypeScript or JavaScript (default is TypeScript)
        - Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
        - Add a GitHub Actions workflow to easily run tests on CI
        - Install Playwright browsers (default is true)
        
    - **Step 3:** Following fill will be added
        - **node_modules:** all libraries are present here(Node, Playwright)
        - **playwright-report:** test report HTML file provide.[this file will be generate after run a test]
        - **test-results:** test result show in JSON formate.[this file will be generate after run a test]
        - **tests:** all test files.
        - **.gitignore:** to be used during git commit and push
        - **package-lock.json**
        - **package.json:** node project management file
        - **playwright.comfig.js:** Configuration file
