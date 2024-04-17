import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, Form, InputContainer, LabelWrapper, Wrapper, FileWrapper, FileName, FileImg, RemoveButton, InputsWrapper } from './styledApply';
import { FileUploader } from "react-drag-drop-files";
import dnd from '../../../../../common/Images/draganddrop.png';
import fileImg from '../../../../../common/Images/SVG/file.svg';
import TextField from '@mui/material/TextField';

export const Apply = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        portfolio: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        surname: false,
        email: false,
        portfolio: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        switch (name) {
            case 'name':
                setFormErrors({ ...formErrors, name: !event.target.validity.valid });
                break;
            case 'surname':
                setFormErrors({ ...formErrors, surname: !event.target.validity.valid });
                break;
            case 'email':
                setFormErrors({ ...formErrors, email: !event.target.validity.valid });
                break;
            case 'portfolio':
                setFormErrors({ ...formErrors, portfolio: !event.target.validity.valid });
                break;
            default:
                break;
        }
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    console.log(formData);
    




    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form onSubmit={onFormSubmit}>
                <InputsWrapper>

                    <TextField
                        required
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={formErrors.name}
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                        helperText={
                            formErrors.name ? "Please enter your name (letters and spaces only)" : ""
                        }
                    />

                    <TextField
                        required
                        label="Name"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        error={formErrors.surname}
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                        helperText={
                            formErrors.surname ? "Please enter your surname (letters and spaces only)" : ""
                        }
                    />

                    <TextField
                        required
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        helperText={formErrors.email ? "Please enter a valid email Example: name@domain.com" : ""}
                        inputProps={{
                            type: "email",
                        }}
                    />

                    <TextField
                        required
                        label="Github / Portfolio Link"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        error={formErrors.portfolio}
                        helperText={formErrors.portfolio ? "Please use the correct link. Example: https://domain.com" : ""}
                        inputProps={{
                            pattern: "^(ftp|http|https):\/\/[^ \" ]+$",
                        }}
                    />

                </InputsWrapper>

                <LabelWrapper>
                    <InputContainer>

                    </InputContainer>
                </LabelWrapper>
                <ApplyButton >Apply</ApplyButton>
            </Form>
        </Wrapper>
    );
};
