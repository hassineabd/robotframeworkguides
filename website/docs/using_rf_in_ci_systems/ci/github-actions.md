# GitHub Actions

**GitHub Actions** is a CI/CD platform that allows you to automate your build, test, and deployment pipeline. It integrates seamlessly with GitHub repositories and supports a wide range of customization options.

To run Robot Framework tests using GitHub Actions, you need to create a workflow file in your repository. This file will include definition of the steps to set up the environment, install dependencies, run tests, and store the results.

## Setting Up the Workflow
Workflows are defined in YAML files located in the .github/workflows/ directory of your repository. Below is an example of a GitHub Actions workflow that runs Robot Framework tests.

Example of GitHub Actions Workflow for Robot Framework
```yaml
# .github/workflows/robotframework.yml

name: Robot Framework CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  run-tests:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.12'                    # adjust your python version

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt

    - name: Run Robot Framework tests
      run: |
        robot --outputdir reports tests/          # you can include flags or however you run your tests
      continue-on-error: true

    - name: Upload Robot Framework reports
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: RobotFrameworkReports
        path: reports/

```

Lines 3-7: on: Specifies the events that trigger the workflow, such as pushes and pull requests to the main branch.

Line 9: jobs: Defines the jobs to run in the workflow.

Line 10: run-tests: Names the job that runs the tests.

Line 11: runs-on: Specifies the runner environment (ubuntu-latest).

Lines 13-27: steps: Lists the steps executed in the job.

