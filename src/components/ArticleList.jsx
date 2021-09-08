import Article from "./Article";
import Button from "./Button"
import { useState } from 'react';

function ArticleList(){
    const [titleColor, setTitleColor] = useState('red'); // echivalentul lui titleColor = 'red'

    const changeTitleColor = (color) => {
        setTitleColor(color); // echivalentul lui titleColor = color;
    }

    return (
        <div className="articles">
            <Button click={() => changeTitleColor('black')} buttonText="Change titles" />

            <Article title="Title 1" color={titleColor} click={() => changeTitleColor('blue')}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Article>
            <Article title="Title 2" color={titleColor} click={() => changeTitleColor('blue')}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Article>
            <Article title="Title 3" color={titleColor} click={() => changeTitleColor('blue')}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Article>
        </div>
    );
}

export default ArticleList;
