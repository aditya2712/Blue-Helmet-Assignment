## Blue Helmet Assignment

### Deployment
The application is deployed on : https://blue-helmet-assignment.herokuapp.com/
The routes are:
https://blue-helmet-assignment.herokuapp.com/job_seekers/
https://blue-helmet-assignment.herokuapp.com/user_info_details/
Details of both the routes are given below

### Technologies Used:
- Node.js
- Express.js
- Sequelize (ORM)
- postgresql (DB)

### Instructions to run the server

1. Clone the repository
2. `cd Blue-Helmet-Assignment`
3. `npm i`
4. Obtain the .env file
5. Start the development server using: `npm run dev`

### Routes
GET /job_seekers/: Returns the list of all job seekers in the format:
```json
[
    {
        "latlong": "28.5397842,77.2489726",
        "address_detail": {
            "addressid": 111444,
            "addressline1": "D-748, Block C, Chittaranjan Park, New Delhi, Delhi 110019, India",
            "addressline2": null,
            "officelatitude": null,
            "officelongitude": null
        },
        "user_info_detail": {
            "firstname": "Babli ",
            "lastname": "",
            "updated_datetime": null,
            "created_datetime": "2021-08-11T02:30:00.000Z",
            "email": null,
            "phone_number": "8130712579"
        }
    },
    {
        "latlong": "28.5397842,77.2489726",
        "address_detail": {
            "addressid": 111448,
            "addressline1": "D-748, Block C, Chittaranjan Park, New Delhi, Delhi 110019, India",
            "addressline2": null,
            "officelatitude": null,
            "officelongitude": null
        },
        "user_info_detail": {
            "firstname": "Mahima",
            "lastname": "Devi",
            "updated_datetime": null,
            "created_datetime": "2021-08-11T02:31:00.000Z",
            "email": null,
            "phone_number": "8929295028"
        }
    }
]
```

GET /user_info_details/: Returns the nested list of all user in the format:
```json
[
    {
        "firstname": "Akshat",
        "lastname": "Bharadwaj",
        "email": "akshat@gmail.com",
        "Phone Number": "9910882574"
    },
    {
        "firstname": "Ram",
        "lastname": "Sharma",
        "email": "bhanusharma2422@gmail.com",
        "Phone Number": "8110095400"
    }
]
```

#### NOTE: The API responses might take time, because the database size is quite large
