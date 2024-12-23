# **Sentiment Analysis API Testing**

## **Project Overview**

This project tests the **Sentiment Analysis API** using Cypress for automated end-to-end testing. It includes validation of API endpoints, testing user interactions on the web interface, and ensuring accurate sentiment predictions. The testing framework is integrated with GitHub Actions for continuous integration.

---

## **Setup Instructions**

### **1. Prerequisites**
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **GitHub repository access** for setting up secrets and CI/CD.
- **Text2Data API Key** for accessing the API.

### **2. Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/ardithaqi/Technical-assignment-ABinBev.git
   cd Technical-assignment-ABinBev

2.	Set up environment variables for local testing:
    - Create a .env file in the project root with the following:
    ```bash
    API_KEY=api_your_key
    API_URL=http://api.text2data.com/v3/Analyze
    PORT=3000

3. Run Cypress open
- Interactive mode:
    ```bash
    npx cypress open
- Headless mode:
    ```bash
    npx cypress run

## Testing Strategy

1. Test Cases
	-	UI Tests: Simulate user interactions on the Text2Data demo interface.
	•	Verify positive, negative, and neutral sentiment predictions.
	•	Handle invalid inputs and check error messages.
	-	API Tests:
	•	Validate response structure, status codes, and predictions.
	•	Test for edge cases like empty or malformed input.

## CI/CD Pipeline

GitHub Actions Integration

The project includes a GitHub Actions workflow to:
- 	Run all Cypress tests automatically on every push and pull request.
- 	Provide clear feedback on test results and logs.
