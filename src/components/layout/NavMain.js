import { UnorderedList } from '@chakra-ui/react';
import NavItem from './NavItem';

const NavMain = (props) => {
    const { navItems } = props;
    return(
        <UnorderedList>
                {navItems.map((navItem) => (
                    <NavItem 
                    key={navItem.id}
                    title={navItem.name}
                    slug={navItem.slug}
                    />
                    ))}
        </UnorderedList>
    );
};

export default NavMain;