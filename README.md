# Slick -- a Sass App

![image](https://github.com/prakashex/slick/assets/90280586/59953d11-e638-4634-8ad4-272def0bac07)

## Technologies Used

- Next.js (13), Supabase, Stripe, Tailwind



Motivation

Goal was to build a full stack Sass app with SSR , payment proccessor integration and supabase

- backend apis handled by nextjs api routes
- frontend is written using pages router 
- uses stripe for payments
- for authenticaiton it uses Email auth provided by supabase
- uses postgres database provided by supabase to store user and client info

## Flow Overview
1. Capture user details using Stripe webhooks when the user pays for a plan.
2. Check if the user already exists in your system.
   - If the user exists, update their plan details.
   - If the user doesn't exist, proceed to the next step.
3. Create a new user using the Supabase auth API, passing the necessary user details.
4. Once the user creation is successful, create the user profile in the profile table by using a database function which triggers when every new user is created , and adds the user details in the profile table.


## Run It locally 

#### clone the repo 

```
git clone https://github.com/prakashex/slick.git
```
#### setup environment variables for the project , make sure you add all the env variables , you would need to signup with stripe and supabase
```
cp .env.example .env.local
```

#### start the development server
```
npm run dev
```

## 👨‍💻 Contributing

Feel free to report any bugs , or suggest a feature request , contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).


