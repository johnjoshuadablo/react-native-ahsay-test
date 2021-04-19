- Introduction
In this technical test, you are required to complete the simple app according to the workflow and layout design spec.

- Layout
Design Spec: https://xd.adobe.com/view/1f2f43b9-c670-4c8d-9c29-6132581e6502-4a7c/
You are asked to follow the layout design spec as close as possible, including but not limited to the margin, padding, font size, colors, etc. 
You can obtain the margin, padding, font size, colors code, etc from the XD design spec by clicking the elements on the XD design spec. You can also download 
the required images from the XD design spec.
Please try your best to use flex to make the layout.


- App Workflow
There are 2 screens in this app. They are 1) Login Screen and 2) List Product Screen.
1) Login Screen
Obtain the username and password from user input and call RestApi.login(username, password) to validate the credential. To simplify the test, the API call is 
hard coded to allow user with username "user" and paassword "iampwd". When the user is validated, navigate to the "List Product Screen".

2) List Product Screen
Call RestApi.getProducts() to get the products and render them to the user.