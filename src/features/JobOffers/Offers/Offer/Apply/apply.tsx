import React, { useState } from 'react';
import { ApplyButton, ApplyTitle, Form, Input, InputContainer, LabelWrapper, Label, Wrapper, LabelSpan, FileWrapper, FileName, FileImg, RemoveButton } from './styledApply';
import { styled } from 'styled-components';
import { FileUploader } from "react-drag-drop-files";
import dnd from '../../../../../common/Images/draganddrop.png';
import fileImg from '../../../../../common/Images/file.svg';

export const Apply = () => {
    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
    };

    const fileTypes = ["PDF",];

    console.log(file);


    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form>
                <LabelWrapper>
                    <InputContainer>
                        <Label>Name & Surname <LabelSpan> *</LabelSpan></Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>E-Mail <LabelSpan> *</LabelSpan></Label>
                        <Input />
                    </InputContainer>
                </LabelWrapper>

                <LabelWrapper>
                    <InputContainer>
                        <Label>GitHub / Porfolio Link <LabelSpan> *</LabelSpan></Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>Linkedin </Label>
                        <Input />
                    </InputContainer>
                </LabelWrapper>

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
