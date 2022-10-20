import { Link, ListItem } from '@chakra-ui/react';
// Get Link from Next Link for routing

const NavItem = (props) => {
    const { title, slug } = props;
    const navLink= `/${title}/${slug}`
    return(
        <Link href={navLink} alt={title}>
            <ListItem>{title}</ListItem>
        </Link>
    );
};

// _hover = {{
//         bg: '#000',
//         color: '#fff'
//     }}

export default NavItem;