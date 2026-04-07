import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, ErrorText, FileImg, FileName, FileNameSuccess, FileWrapper, FileWrapper2, Form, FormInput, FormLabel, InputContainer, InputsWrapper, LabelWrapper, RemoveButton, Wrapper } from './styledApply';
import { FileUploader } from "react-drag-drop-files";
import fileImg from '../../../../../common/Images/SVG/file.svg';
import dnd from '../../../../../common/Images/draganddrop.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Apply = () => {
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', portfolio: '' });
    const [formErrors, setFormErrors] = useState({ name: false, surname: false, email: false, portfolio: false });
    const [file, setFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const fileTypes = ["PDF"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormErrors(prev => ({ ...prev, [name]: !e.target.validity.valid }));
    };

    const isValid = () =>
        formData.name.trim() !== '' &&
        formData.surname.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.portfolio.trim() !== '' &&
        file !== null &&
        !Object.values(formErrors).some(Boolean);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', surname: '', email: '', portfolio: '' });
        setFile(null);
        toast.success('Your application has been sent! 🎉');
    };

    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form onSubmit={onSubmit} noValidate>
                <InputsWrapper>
                    <InputContainer>
                        <FormLabel>First name *</FormLabel>
                        <FormInput
                            name="name" value={formData.name}
                            onChange={handleInputChange}
                            hasError={formErrors.name}
                            placeholder="Your first name"
                            pattern="[A-Za-zÀ-ž ]+"
                            required
                        />
                        {formErrors.name && <ErrorText>Letters only</ErrorText>}
                    </InputContainer>

                    <InputContainer>
                        <FormLabel>Last name *</FormLabel>
                        <FormInput
                            name="surname" value={formData.surname}
                            onChange={handleInputChange}
                            hasError={formErrors.surname}
                            placeholder="Your last name"
                            pattern="[A-Za-zÀ-ž ]+"
                            required
                        />
                        {formErrors.surname && <ErrorText>Letters only</ErrorText>}
                    </InputContainer>

                    <InputContainer>
                        <FormLabel>Email address *</FormLabel>
                        <FormInput
                            name="email" value={formData.email}
                            onChange={handleInputChange}
                            hasError={formErrors.email}
                            placeholder="name@domain.com"
                            type="email"
                            required
                        />
                        {formErrors.email && <ErrorText>Please enter a valid email</ErrorText>}
                    </InputContainer>

                    <InputContainer>
                        <FormLabel>GitHub / Portfolio *</FormLabel>
                        <FormInput
                            name="portfolio" value={formData.portfolio}
                            onChange={handleInputChange}
                            hasError={formErrors.portfolio}
                            placeholder="https://github.com/…"
                            pattern="^(https?)://[^\s]+"
                            required
                        />
                        {formErrors.portfolio && <ErrorText>Enter a valid URL (https://…)</ErrorText>}
                    </InputContainer>
                </InputsWrapper>

                <LabelWrapper>
                    {file ? (
                        <FileWrapper2>
                            <FileImg src={fileImg} />
                            <FileNameSuccess>✓ {file.name}</FileNameSuccess>
                            <RemoveButton type="button" onClick={() => setFile(null)}>Remove</RemoveButton>
                        </FileWrapper2>
                    ) : (
                        <FileUploader handleChange={(f: File) => setFile(f)} name="cv" types={fileTypes}>
                            <FileWrapper>
                                <FileImg src={dnd} />
                                <FileName>Drop your CV here or click to upload</FileName>
                                <p style={{ fontSize: 11, color: '#5a5a72', marginTop: 4 }}>PDF only, max 5MB</p>
                            </FileWrapper>
                        </FileUploader>
                    )}
                </LabelWrapper>

                <ApplyButton disabled={!isValid() || submitted}>
                    {submitted ? 'Applied ✓' : 'Apply Now'}
                </ApplyButton>
            </Form>
        </Wrapper>
    );
};
