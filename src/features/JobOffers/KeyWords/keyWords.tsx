import React, { useState } from 'react';
import { Form, InputWrapper, KeyWord, KeyWordContainer, KeyWordInput, KeyWordsWrapper, Legend, RemoveButton, SearchButton, Title, Wrapper } from './styledKeyWords';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addKeyWord, removeKeyWord } from './keyWordsSlice';
import { RootState } from '../../../core/store';

export const KeyWords = () => {

    const dispatch = useDispatch();
    const keyWords = useSelector((state: RootState) => state.keyWords.keyWords)

    const [newKeyWord, setNewKeyWord] = useState("");



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
            <Form onSubmit={onFormSubmit}>
                <Title>Add keywords to better match offers to your expectations</Title>

                <InputWrapper>
                    <KeyWordInput
                        placeholder='Key Words'
                        value={newKeyWord}
                        onChange={({ target }) => setNewKeyWord(target.value)}
                    />

                    <SearchButton type='submit'>Add key word</SearchButton>
                </InputWrapper>

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