import React from 'react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { Button, Stack, Box, TextField } from '@mui/material';
import { validationSchema } from './shema/file';
import httpclient from "../httpclient";

function Profile() {
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    secondName: '',
    email: '',
    address: '',
    contactNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await httpclient.get('//localhost:5000/user');

        if (response.status !== 200) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const user = response.data; // Access the nested data field
      
        setInitialValues({
          firstName: user.first_name || '',
          secondName: user.second_name || '',
          email: user.email || '',
          address: user.address || '',
          contactNumber: user.contact_number || '',
        }); // Set initial values from fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message || 'An error occurred while fetching data.'); // Handle errors gracefully
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or error
      }
    };

    fetchData(); // Call the function on component mount
  }, []); // Empty dependency array to fetch data only once

  const formik = useFormik({
    initialValues,
    enableReinitialize: true, // Enable reinitialization when initialValues change
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Submitted", values);
      try {
        const response = await httpclient.put('//localhost:5000/user', {
          email: values.email,
          first_name: values.firstName,
          second_name: values.secondName,
          contact_number: values.contactNumber,
          address: values.address,
        });

        if (response.status === 200) {
          alert("data is updated")
        } else {
          console.error('Failed to update user:', response.status);
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  });

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit} // Ensure handleSubmit is correctly bound
    >
      <Stack direction={'row'} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First name"
          variant="filled"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Second name"
          variant="filled"
          name="secondName"
          value={formik.values.secondName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.secondName && Boolean(formik.errors.secondName)}
          helperText={formik.touched.secondName && formik.errors.secondName}
        />
      </Stack>

      <TextField
        id="filled-basic"
        label="E-mail"
        variant="filled"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="filled-basic"
        label="Address"
        variant="filled"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <TextField
        id="filled-basic"
        label="Contact Number"
        variant="filled"
        name="contactNumber"
        value={formik.values.contactNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
        helperText={formik.touched.contactNumber && formik.errors.contactNumber}
      />
      <Box sx={{ textAlign: "right" }}>
        <Button type='submit' variant='contained' sx={{ textTransform: 'initial' }}>Update</Button>
      </Box>
    </Box>
  );
}

export default Profile;
