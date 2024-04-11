import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, Form, InputContainer, LabelWrapper, Wrapper, FileWrapper, FileName, FileImg, RemoveButton, InputsWrapper } from './styledApply';
import { FileUploader } from "react-drag-drop-files";
import dnd from '../../../../../common/Images/draganddrop.png';
import fileImg from '../../../../../common/Images/SVG/file.svg';
import TextField from '@mui/material/TextField';

export const Apply = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
    };

    const fileTypes = ["PDF",];

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }



    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form onSubmit={onFormSubmit}>
                <InputsWrapper>
                    <TextField
                        error
                        id="outlined-basic"
                        label='Full Name'
                        variant="outlined"
                        required
                        type='name'
                        helperText='Please enter your full name'
                        onChange={({ target }) => setName(target.value)}

                    />

                    <TextField
                        error
                        id="outlined-basic"
                        label='E-Mail'
                        variant="outlined"
                        required
                        type='email'
                        helperText='Please use correct formatting'
                        onChange={({ target }) => setName(target.value)}

                    />

                    <TextField
                        error
                        id="outlined-basic"
                        label='GitHub / Porfolio Link'
                        variant="outlined"
                        required
                        type='text'
                        helperText='Please use correct link'
                        onChange={({ target }) => setName(target.value)}

                    />

                    <TextField
                        error
                        id="outlined-basic"
                        label='Linkedin'
                        variant="outlined"
                        type='text'
                        helperText='Please use correct link'
                        onChange={({ target }) => setName(target.value)}

                    />
                </InputsWrapper>


                <LabelWrapper>
                    <InputContainer>
                        <FileUploader handleChange={handleChange} name="my FIle" types={fileTypes} >
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
                <ApplyButton>Apply</ApplyButton>
            </Form>
        </Wrapper>
    );
};
