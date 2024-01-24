import React from 'react';
import { Form } from 'react-bootstrap';

const UserDetailsForm = ({ firstName, lastName, bioData, userJobTitle, userEmail }) => {
    return (
        <Form className='mt-3 text-start '>
            <Form.Group className="mb-2 mt-2" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control className="border border-black" defaultValue={firstName + ' ' + lastName} readOnly
                    type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control className="border border-black" readOnly
                    as="textarea" defaultValue={bioData}
                    style={{ height: '60px' }}
                />
            </Form.Group>

            <Form.Group className="mb-2 mt-2" controlId="formBasicJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control className="border border-black" defaultValue={userJobTitle} readOnly type="text" />
            </Form.Group>
            <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="border border-black" defaultValue={userEmail} readOnly type="email" />
            </Form.Group>
        </Form>
    );
};

export default UserDetailsForm;