require("dotenv").config();
const express = require("express");

// Database Connection
sequelize = require("./db_connection.js");

app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get("/job_seekers/", async (req, res) => {
  try {
    query = `
	SELECT 
		latlong, 
		address_detail.addressid as "address_detail.addressid", 
		address_detail.addressline1 as "address_detail.addressline1", 
		address_detail.addressline2 as "address_detail.addressline2", 
		address_detail.officelatitude as "address_detail.officelatitude", 
		address_detail.officelongitude as "address_detail.officelongitude", 
		user_info_detail.firstname as "user_info_detail.firstname", 
		user_info_detail.lastname as "user_info_detail.lastname", 
		user_info_detail.updated_datetime as "user_info_detail.updated_datetime", 
		user_info_detail.created_datetime as "user_info_detail.created_datetime", 
		user_info_detail.email as "user_info_detail.email", 
		user_info_detail.username as "user_info_detail.phone_number" 
	FROM 
		jobseeker_detail 
		inner join user_info_detail on user_info_detail.userid = jobseeker_detail.userid 
		inner join address_detail on address_detail.addressid = jobseeker_detail.addressid;
	`;

    const job_seekers = await sequelize.query(query.trim(), {
      type: sequelize.QueryTypes.SELECT,
      model: "jobseeker_detail",
      mapToModel: true,
      nest: true,
      raw: true,
    });

    res.json(job_seekers);
  } catch (err) {
    console.log(err);
  }
});

app.get("/user_info_details/", async (req, res) => {
  try {
    query = `
		SELECT 
			firstname, 
			lastname, 
			email , 
			username as "Phone Number"  
		FROM 
			user_info_detail;
	  `;

    const job_seekers = await sequelize.query(query.trim(), {
      type: sequelize.QueryTypes.SELECT,
      model: "user_info_detail",
      mapToModel: true,
      raw: true,
    });

    res.json(job_seekers);
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
