# firebase-ex-proj

## Project Objective

Use the login prompt in `/auth` so that the user enters in their email and password. Their email and password are authenticated using firebase authentication. 
On the same page, the user enters their favorite food. Their favorite is stored in firebase firestore and their favorite food is linked to their email.

Once they enter in this information, they are taken `/home` where their favorite food and email is displayed to them. 

## Notes

The project already has a firebase environment setup. 

## Next Steps

1. Add a food html prompt (copy from the other two -- email + password)
2. You need to use angular forms to take in the data from the `/auth` form html -- https://angular.io/guide/forms-overview#setup-in-template-driven-forms
3. Use firebase authentication to authenticate the user using email and password -- https://firebase.google.com/docs/auth/web/password-auth and https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
4. Use a .then() (this will be from the firebase auth promise) in the firebase project to continue along to using firebase firestore for storing the email and favorite food of the user and make the firestore docuemnt id and the authenitcation user id the same
5. Call this data in `/home` and use auth-service to pass the uid or email from `/auth` to `/home` and then display the email and favorite food in `/home`.
