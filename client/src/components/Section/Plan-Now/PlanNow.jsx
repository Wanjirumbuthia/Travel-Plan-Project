import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import "./plannow.css";
import { Link } from "react-router-dom";


function PlanNow() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activityOptions, setActivityOptions] = useState([]);
  const [activityCategories, setActivityCategories] = useState({});

  const cities = [
    'Paris', 'New York', 'Tokyo', 'Brazil', 'Sydney', 'Morocco', 'USA', 'Egypt', 'Nairobi',
  ];

  const categories = {
    'KidFriendly': ['Theme Parks', 'Zoos', 'Aquariums', 'Museums', 'Children\'s Museums'],
    'Museums': ['Art Museums', 'History Museums', 'Science Museums', 'Natural History Museums'],
    'Shopping': ['Shopping Malls', 'Boutiques', 'Markets', 'Department Stores'],
    'OutdoorAdventures': ['Hiking', 'Camping', 'Fishing', 'Kayaking', 'Mountain Biking'],
    'Art & Cultural': ['Art Galleries', 'Concerts', 'Theatres', 'Historical Sites'],
    'Historical': ['Castles', 'Ruins', 'Monuments', 'Historical Buildings'],
    'Amusement Parks': ['Theme Parks', 'Water Parks', 'Roller Coasters', 'Carnival Rides'],
  };

  const initialValues = {
    city: '',
    startDate: '',
    endDate: '',
    category: '',
    activities: [],
  };

  const validationSchema = Yup.object().shape({
    city: Yup.string().required('Required'),
    startDate: Yup.date().required('Required'),
    endDate: Yup.date().required('Required'),
    category: Yup.string().required('Required'),
    activities: Yup.array().of(
      Yup.object().shape({
        category: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        time: Yup.string().required('Required'),
        cost: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
      })
    ),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form Values:', values);

    // Validate the request data
    if (!values.city || !values.startDate || !values.endDate || !values.category || !values.activities) {
      console.error('Invalid request data');
      return;
    }

    // Validate each activity object
    values.activities.forEach((activity) => {
      if (!activity.description || !activity.time || !activity.cost) {
        console.error('Invalid activity data');
        return;
      }
    });

    // Convert startDate and endDate to date objects
    const startDate = new Date(values.startDate);
    const endDate = new Date(values.endDate);

    const startDateIso = startDate.toISOString();
    const endDateIso = endDate.toISOString();

    // Post trip data
    fetch('http://127.0.0.1:5555/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: values.city,
        startDate: startDateIso, // Convert date to ISO string
        endDate: endDateIso, // Convert date to ISO string
      }),
    })
    .then(response => response.json())
    .then(data => {
      const tripId = data.id;

      // Post activities data
      const activityPromises = values.activities.map((activity) =>
        fetch('http://127.0.0.1:5555/activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: activity.description,
            date: activity.time,
            time: activity.time,
            cost: parseFloat(activity.cost), // Convert cost to float
            trip_id: tripId,
          }),
        })
        .then(response => response.json())
      );

      return Promise.all(activityPromises);
    })
    .then(() => {
      alert('Trip and activities posted successfully!');
      resetForm(); // Reset the form after successful submission
    })
    .catch(error => console.error(error));

    setSubmitting(false);
  };

  return (
    <div className='plan'>
      <h1>Plan your next adventure</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="city">Where do you want to go?</label>
              <Field as="select" id="city" name="city" className={selectedCity ? 'selected-option' : ''} onChange={(e) => {
                setSelectedCity(e.target.value);
                setFieldValue('city', e.target.value);
              }}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city} className={selectedCity === city ? 'selected-option' : ''}>
                    {city}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="city" />
            </div>
            <div>
              <label htmlFor="startDate">Select dates:</label>
              <Field type="date" id="startDate" name="startDate" />
              <ErrorMessage name="startDate" />
            </div>
            <div>
              <label htmlFor="endDate">Select dates:</label>
              <Field type="date" id="endDate" name="endDate" />
              <ErrorMessage name="endDate" />
            </div>
            <div>
              <label htmlFor="category">Select the kind of activities you want to do:</label>
              <Field
                as="select"
                id="category"
                name="category"
                className={selectedCategory ? 'selected-option' : ''}
                onChange={(e) => {
                  const category = e.target.value;
                  setSelectedCategory(category);
                  setFieldValue('category', category);
                  setFieldValue('activities', []);
                  setActivityOptions(categories[category] || []);
                }}
              >
                <option value="">Select a category</option>
                {Object.keys(categories).map((category) => (
                  <option key={category} value={category} className={selectedCategory === category ? 'selected-option' : ''}>
                    {category}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="category" />
            </div>
            {selectedCategory && (
              <FieldArray
                name="activities"
                render={(arrayHelpers) => (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          category: '',
                          name: '',
                          description: '',
                          time: '',
                          cost: '',
                        })
                      }
                    >
                      Add Activity
                    </button>
                    {values.activities.map((activity, index) => (
                      <div key={index} className="activity-container">
                        <h4>Activity {index + 1}</h4>
                        <div>
                          <label htmlFor={`activities.${index}.category`}>Category:</label>
                          <Field
                            as="select"
                            name={`activities.${index}.category`}
                            onChange={(e) => {
                              const selectedCategory = e.target.value;
                              setFieldValue(`activities.${index}.category`, selectedCategory);
                              setFieldValue(`activities.${index}.name`, '');
                              setActivityOptions(categories[selectedCategory] || []);
                            }}
                          >
                            <option value="">Select a category</option>
                            {Object.keys(categories).map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name={`activities.${index}.category`} />
                        </div>
                        <div>
                          <label htmlFor={`activities.${index}.name`}>Name:</label>
                          <Field as="select" name={`activities.${index}.name`} placeholder="Activity Name">
                            <option value="">Select an activity</option>
                            {activityOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name={`activities.${index}.name`} />
                        </div>
                        <div>
                          <label htmlFor={`activities.${index}.description`}>Description:</label>
                          <Field name={`activities.${index}.description`} placeholder="Description" />
                          <ErrorMessage name={`activities.${index}.description`} />
                        </div>
                        <div>
                          <label htmlFor={`activities.${index}.time`}>Time:</label>
                          <Field name={`activities.${index}.time`} placeholder="Time" type="time" />
                          <ErrorMessage name={`activities.${index}.time`} />
                        </div>
                        <div>
                          <label htmlFor={`activities.${index}.cost`}>Cost:</label>
                          <Field name={`activities.${index}.cost`} placeholder="Cost" type="number" />
                          <ErrorMessage name={`activities.${index}.cost`} />
                        </div>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove Activity
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              />
            )}
            <button type="submit" disabled={isSubmitting}>
              Plan
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PlanNow;


