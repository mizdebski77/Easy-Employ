import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, Form, Input, InputContainer, LabelWrapper, Label, Wrapper, LabelSpan, FileWrapper, FileName, FileImg, RemoveButton, InputsWrapper } from './styledApply';
import { FileUploader } from "react-drag-drop-files";
import dnd from '../../../../../common/Images/draganddrop.png';
import fileImg from '../../../../../common/Images/SVG/file.svg';
import { formInputs } from '../../../../../core/arrays';

export const Apply = () => {

    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
    };

    const fileTypes = ["PDF",];



    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form>
                <InputsWrapper>
                    {formInputs.map((input, index) => (
                        <InputContainer key={index}>
                            <Label>{input.text} <LabelSpan> *</LabelSpan></Label>
                            <Input />
                        </InputContainer>
                    ))}
                </InputsWrapper>


                <LabelWrapper>
                    <InputContainer>
                        <Label>File Upload <LabelSpan> *</LabelSpan></Label>
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
