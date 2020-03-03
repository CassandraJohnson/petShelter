•	CRUD operations all working
o	Able to create new pets
o	All pets are displayed upon visiting the website
o	User may choose a pet to see its details
o	Able to edit each pet
	Edit form is pre-populated with the pet’s existing data
o	Able to adopt each pet, which removes the pet from the database
•	Routing
o	Root route redirects to /pets and displays all pets
o	Route ‘pets/new’ displays the form to create a new pet
	Successful creation and cancel redirect to the root route
o	Route ‘/pets/:id’ displays all the details of a particular pet
o	Route ‘/pets/:id/edit’ displays the pre-populated form to edit a pet
	Successful edit and cancel redirect to the pet’s details page
•	Backend validations
o	All pets must have a name of at least 3 characters
o	All pets must have a type of at least 3 characters
o	All pets must have a description of at least 3 characters
o	All pets may have up to three skills
o	Error messages inform the user which requirements are not met when creating a pet
o	Error messages are custom-written (not the mongoose default messages)
•	HTML and CSS reflect the wireframe to at least 75% accuracy
# petShelterApp
