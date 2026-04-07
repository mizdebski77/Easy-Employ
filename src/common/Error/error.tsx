import { Image, Title, Wrapper } from './styledError';
import error from './../../common/Images/SVG/error.svg';

export const Error = () => {

    return (
        <Wrapper>
            <Image src={error} />
            <Title>Ups.. Something went wrong. Try again later</Title>
        </Wrapper>
    );
};

