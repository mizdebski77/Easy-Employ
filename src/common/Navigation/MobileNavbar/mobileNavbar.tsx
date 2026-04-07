import { NavbarLink, Wrapper, ImgWrapper, LinkImg } from './styledMobileNavbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleMobileNavigation } from './navigationSlice';
import { links } from '../../../core/arrays';
import { scrollTop } from '../../../core/scrollTop';

export const MobileNavbar = () => {
    const dispatch = useDispatch();
    const mobileNavigation = useSelector((state: RootState) => state.navigation.mobileNavigation);

    const variants = {
        hidden:  { x: "-100%", opacity: 0, transition: { type: "tween" } },
        visible: { x: 0,       opacity: 1, transition: { type: "tween" } },
    };

    return (
        <AnimatePresence>
            <Wrapper
                as={motion.div}
                initial="hidden"
                animate={mobileNavigation ? "visible" : "hidden"}
                variants={variants}
            >
                {links.map((link, index) => (
                    <NavbarLink
                        key={index}
                        to={link.link}
                        onClick={() => {
                            dispatch(toggleMobileNavigation());
                            scrollTop();
                        }}
                    >
                        {link.text}
                    </NavbarLink>
                ))}
                <ImgWrapper>
                    <LinkImg to="/Log-In" onClick={() => dispatch(toggleMobileNavigation())}>
                        Sign In
                    </LinkImg>
                    <LinkImg to="/Register" onClick={() => dispatch(toggleMobileNavigation())}>
                        Register
                    </LinkImg>
                </ImgWrapper>
            </Wrapper>
        </AnimatePresence>
    );
};
