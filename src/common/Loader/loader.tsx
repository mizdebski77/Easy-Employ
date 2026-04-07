import { Spinner, Title, Wrapper } from './styledLoader';

export const Loader = () => {
    return (
        <Wrapper>
            <Spinner />
            <Title>
                Loading data…
                <p>
                    Backend is hosted on Render free tier — may take up to 30s on first load.
                </p>
            </Title>
        </Wrapper>
    );
};
