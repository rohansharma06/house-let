# HOUSE-LET

> - One stop where you can search house as well as search for Tenant.
> - Hosted at: [house-let](https://houselet-395a2.firebaseapp.com/)

## Basic Funcionality

- ADMIN [owner of property]

  1. [Loging] => (email,password)
  2. [Signup] => (name,email,phone no,password)
  3. [Add his property[] => (name,rent,bhk,description,city)
  4. See who applied in his property.
  5. Accept or reject Application.

- USER [people who apply for rent]
  1. [Loging] => (email,password)
  2. [Signup] => (name,email,phone no,password)
  3. See All properties available.
  4. Apply filter on basis of cost,city,bhk.
  5. See his application status.

## Folder Structure

.

    ├── client-side
      ├── public
          ├── index.html
          ├── images
      ├── src
          ├── Action
              ├── (contains all actions type and action creators)
          ├── Component
              ├── (contains all react component used in website)
          ├── Helpers
              ├── (contains different URLs for API call and other userfull data)
          ├── Reducer
              ├── (contains all reducers)
          ├── Store
              ├── (config react store to keep data)
          ├── chat.css
          ├── index.css
          ├── index.js
      ├── index.js
      ├── package.json
      ├── package-lock.json
      ├── .gitignore

    ├── config
        ├── (contain config for mongo and passport)
    ├── controllers
        ├──  (contain different controllers)
    ├── models
        ├──  (containmodel schema)
    ├── routes
        ├──  (contain different routes)
    ├── index.js
    ├── package.json
    ├── .gitignore

.

## Getting Started

1. Clone the project: [clone](https://github.com/rohansharma06/house-let.git)
2. Go to folder.
3. Run command `npm install`
4. Run command: `cd client-side`
5. Run command: `npm start`
6. Go to https://localhost/3000 to use the application.
7. Happy Learning ❤️
