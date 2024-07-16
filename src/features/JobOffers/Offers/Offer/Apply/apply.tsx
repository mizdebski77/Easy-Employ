import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, Form, InputContainer, LabelWrapper, Wrapper, FileWrapper, FileName, FileImg, RemoveButton, InputsWrapper } from './styledApply';
import { FileUploader } from "react-drag-drop-files";
import dnd from '../../../../../common/Images/draganddrop.png';
import fileImg from '../../../../../common/Images/SVG/file.svg';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const [file, setFile] = useState<File | null>(null)

    const handleChange = (file: File) => {
        setFile(file);
    };

    const fileTypes = ["PDF",];

    const hasErrors = Object.values(formErrors).some(error => error);


    const isFormValid = () => {
        if (formData.name.trim() === '' ||
            formData.surname.trim() === '' ||
            formData.email.trim() === '' ||
            formData.portfolio.trim() === '' ||
            file === null) {
            return false;
        } else {
            return true;
        }
    };

    const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const notify = () => toast.success("Your application has been sent!");

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setFormData({
            name: '',
            surname: '',
            email: '',
            portfolio: '',
        });
        setFile(null);

        notify();
    };



    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form onSubmit={onFormSubmit} noValidate>
                <InputsWrapper>

                    <TextField
                        required
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputsChange}
                        error={formErrors.name}
                        inputProps={{
                            pattern: "[A-Za-z]+",
                        }}
                        helperText={
                            formErrors.name ? "Please enter your name (letters only)" : ""
                        }
                    />

                    <TextField
                        required
                        label="Surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputsChange}
                        error={formErrors.surname}
                        inputProps={{
                            pattern: "[A-Za-z]+",
                        }}
                        helperText={
                            formErrors.surname ? "Please enter your surname (letters only)" : ""
                        }
                    />

                    <TextField
                        required
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputsChange}
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
                        onChange={handleInputsChange}
                        error={formErrors.portfolio}
                        helperText={formErrors.portfolio ? "Please use the correct link. Example: https://domain.com" : ""}
                        inputProps={{
                            pattern: "^(ftp|http|https):\/\/[^ \" ]+$",
                        }}
                    />

                </InputsWrapper>

                <LabelWrapper>
                    <InputContainer>
                        <FileUploader handleChange={handleChange} name="my FIle" types={fileTypes} required >
                            <FileWrapper>
                                <FileImg src={file ? fileImg : dnd} />
                                <FileName>{file ? file.name : 'Upload your CV'}</FileName>
                                {file ? (
                                    <RemoveButton onClick={() => setFile(null)}>✖</RemoveButton>
                                ) : null}
                            </FileWrapper>

                        </FileUploader>
                    </InputContainer>
                </LabelWrapper>
                <ApplyButton disabled={!isFormValid() || hasErrors === true}>Apply</ApplyButton>
            </Form>
        </Wrapper >
    );
};
