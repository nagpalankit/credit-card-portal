# Credit Card Management Portal

This application provides the responsive user interface for managing credit card data, allowing users to create and read credit card information.

The application is built using NextJS framework and Tailwind CSS, and calls external APIs for data persistence.

## Requirements

For building and running the application you need:
- Node v20

## Running the application locally

1. Clone the repository on local machine using the preferred tool
2. Open the repository root directory in the preferred command line
3. Run the following command to install the project dependencies:
```bash
npm install
```
4. Run the following command to start the development server:
```bash
npm run dev
```
Observe the logs to verify that the application has started successfully. It should be similar to:
```bash
> credit-card-portal@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.1 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.68.112:3000

 ✓ Starting...
 ✓ Ready in 705ms
```

**Note:**
1. Although the default port is 3000, do confirm the correct port number from the logs (as shown above), as Node can start on a different port if the default port is unavailable.
2. Application uses the backend APIs for persistence, and it should be available on port 8080 before testing the application, as dynamic components will not function properly without one.

## Testing the application

### Manual Testing
Once the application is up and running, navigate to the [Dashboard](http://localhost:3000/dashboard) page to view the single page application.

To create and store a new credit card, use the following test data:
| **Field**   | **Example Value**     
|-------------|-----------------------------------------------------------------------
| Name        | Any string between 3 and 50 digits
| Card Number | 13 to 19 digits that passes Luhn 10 validation (e.g. 4417123456789113)
| Limit       | Any number greater than 1000 and less than 10000


### Automated Testing
The project includes a set of unit tests to verify the functionality of the application. You can run the tests from the project root directory using the following command:
```bash
npm run test
```

## References
This application serves the UI for the [Credit Card Processor](https://github.com/nagpalankit/credit-card-processor) back-end APIs.

## Contact Information
If you are having any trouble with the application, please feel free to reach out to me at [nagpalankit@icloud.com](mailto:nagpalankit@icloud.com)
