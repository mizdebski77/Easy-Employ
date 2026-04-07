import React from 'react';
import { FormGroup, Input, Label, SectionTitle, Wrapper } from './styledForms';

export const Forms = () => {
    return (
        <Wrapper>
            <SectionTitle>Personal Information</SectionTitle>
            <FormGroup>
                <Label>Full Name</Label>
                <Input placeholder="Your full name" />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="name@domain.com" />
            </FormGroup>
            <FormGroup>
                <Label>Phone</Label>
                <Input placeholder="+48 000 000 000" />
            </FormGroup>
            <FormGroup>
                <Label>Location</Label>
                <Input placeholder="City, Country" />
            </FormGroup>
            <FormGroup>
                <Label>Job Title</Label>
                <Input placeholder="e.g. Frontend Developer" />
            </FormGroup>
        </Wrapper>
    );
};
