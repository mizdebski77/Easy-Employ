import React, { useState } from 'react';
import { AddKeyWordButton, Form, Input, InputWrapper, KeyWord, KeyWordContainer, KeyWordInput, KeyWordsWrapper, Legend, Option, RemoveButton, SearchButton, Select, Wrapper } from './styledFormElement';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addKeyWord, removeKeyWord } from './formSlice';
import { RootState } from '../../../core/store';

export const FormElement = () => {

    const dispatch = useDispatch();
    const keyWords = useSelector((state: RootState) => state.keyWords.keyWords)

    const [newKeyWord, setNewKeyWord] = useState("");

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const handleAddNewKeyWord = () => {
        if (newKeyWord.length > 0) {
            dispatch(addKeyWord({
                content: newKeyWord,
                id: nanoid(),
            }));
            setNewKeyWord("");
        }
    };


    return (
        <Wrapper>
            <Form
                onSubmit={onFormSubmit}
            >
                <InputWrapper>
                    <KeyWordInput
                        placeholder='Key Words'
                        value={newKeyWord}
                        onChange={({ target }) => setNewKeyWord(target.value)}
                    />
                    <AddKeyWordButton
                        type='button'
                        onClick={handleAddNewKeyWord}
                        disabled={newKeyWord.length === 0}
                    >
                        +
                    </AddKeyWordButton>
                </InputWrapper>

                <Input placeholder='Location' />
                <Select defaultValue='Distance'>
                    <Option disabled value='Distance'>Distance</Option>
                    <Option value=''>+ 30 km</Option>
                    <Option value=''>+ 50 km</Option>
                    <Option value=''>+ 70 km</Option>
                    <Option value=''>+ 100 km</Option>
                </Select>
                <SearchButton>Search</SearchButton>
            </Form>

            {keyWords.length > 0 && (
                <KeyWordsWrapper>
                    <Legend>Key words</Legend>
                    {keyWords.map((keyWord, index) => (
                        <KeyWordContainer key={index}>
                            <KeyWord>{keyWord.content} </KeyWord>
                            <RemoveButton
                                onClick={() => dispatch(removeKeyWord(keyWord.id))}
                            > x </RemoveButton>
                        </KeyWordContainer>
                    ))}
                </KeyWordsWrapper>
            )}
        </Wrapper>
    );
};