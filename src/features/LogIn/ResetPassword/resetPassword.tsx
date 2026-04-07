import React from 'react';
import { BackLink, Button, Card, Input, Label, Subtitle, Title, Wrapper } from './styledResetPassword';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ResetPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Reset link sent! Check your inbox.');
        setTimeout(() => navigate('/Log-In'), 1500);
    };

    return (
        <Wrapper>
            <Card>
                <Title>Reset password</Title>
                <Subtitle>Enter your email address and we'll send you a link to reset your password.</Subtitle>

                <form onSubmit={handleSubmit}>
                    <Label>Email address</Label>
                    <Input type="email" placeholder="name@domain.com" required />
                    <Button type="submit">Send reset link</Button>
                </form>

                <BackLink onClick={() => navigate('/Log-In')}>← Back to Sign In</BackLink>
            </Card>
        </Wrapper>
    );
};
