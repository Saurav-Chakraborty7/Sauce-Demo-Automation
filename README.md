# SwagLabs Automation

This project is a WebdriverIO-based automation test suite for the SwagLabs demo website. The tests are written using WebdriverIO and Allure for generating reports.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Saurav-Chakraborty7/Sauce-Demo-Automation.git
cd Sauce-Demo-Automation
```

### 2. Install Node Modules

To get started, install the required node modules by running:

```bash
npm install
```

### 3. Install WebdriverIO

If you haven't already, install WebdriverIO via npm:

```bash
npm install @wdio/cli --save-dev
```

### 4. Install Allure Reporter

For generating test reports, we use the Allure reporter. Install it using:

```bash
npm install @wdio/allure-reporter --save-dev
npm install allure-commandline --save-dev
```

**Note:** If you face issues with running Allure commands, you may need to configure your system's execution policy for running scripts (e.g., on Windows, you can set it with `Set-ExecutionPolicy RemoteSigned` in PowerShell).

### 5. Run Tests

- To run tests in parallel (spec-wise):

```bash
npm run test
```

- To run tests suite-wise (e.g., purchase suite):

```bash
npm run suits
```

### 6. Generate Allure Report

Once the tests have completed, you can generate and view the Allure report:

```bash
npm run getReport
```

This command will generate the report from the test results and open it in your default browser.

## Project Structure

- **test/spec**: Contains the test specifications.
- **test/pages**: Contains the Page Object Model (POM) files for organizing locators and actions.
- **allure-results**: Stores the results generated after running tests, which are then used to create reports in Allure.
