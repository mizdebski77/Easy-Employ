import React, { useState } from 'react';
import { AddKeyWordButton, Form, Input, InputWrapper, KeyWord, KeyWordContainer, KeyWordInput, KeyWordsWrapper, Legend, Option, RemoveButton, SearchButton, Select, Wrapper } from './styledKeyWords';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addKeyWord, removeKeyWord } from './keyWordsSlice';
import { RootState } from '../../../core/store';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

export const KeyWords = () => {

    const dispatch = useDispatch();
    const keyWords = useSelector((state: RootState) => state)

    const [newKeyWord, setNewKeyWord] = useState("");

    console.log(keyWords);


    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

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
                </InputWrapper>

                <SearchButton type='submit'>Add key word</SearchButton>
            </Form>


            {/* {keyWords.length > 0 && (
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
            )} */}
        </Wrapper>
    );
};