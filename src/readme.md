<!-- //Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit. -->

// index.html
1. Include Bootstrap CDN links in the head.
2. Create a <div> container for the table and form.
3. Define a table with a thead and tbody, applying Bootstrap table classes.
4. Create a form with input fields for each piece of data and a submit button, using Bootstrap form classes.

// styles.css (Optional)
1. Define any custom styles that are not covered by Bootstrap.

// script.js
1. Add an event listener to the form's submit event.
2. On form submit, prevent the default action using event.preventDefault().
3. Retrieve values from the form inputs.
4. Create a new table row element (<tr>).
5. For each piece of data, create a table cell (<td>) and append it to the row.
6. Append the new row to the table body (<tbody>).
7. Reset the form inputs to clear them after submission.