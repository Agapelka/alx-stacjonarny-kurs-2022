import './Main.css';
import WelcomeBox from '../../sections/WelcomeBox/WelcomeBox';
import WelcomeBoxWithChildren from '../../sections/WelcomeBoxWithChildren/WelcomeBoxWithChildren';
import Title from '../../atoms/Title/Title';
import TitleWithChidren from '../../atoms/TitleWithChildren/TitleWithChildren';

function Main() {
  return (
    <div>
        <h1>Hello Chat with composition</h1>

        {/* Żeby wywołać komponent, musimy go użyć tak jak znacznik HTML */}
        {/* jeś;li chcę przekazać jakieś informacje do komponentu, potrzebujemy to wpisać jak atrybuty HTML */}
        <Title text="Hello" isRed={true}/><br/>      
         <TitleWithChidren>
            <h3>My dynamic title WithChildren</h3>
        </TitleWithChidren>
        <WelcomeBox title="Gotowe" description="Zimno dziś"/>
        <WelcomeBox title="Kurs ALX jest fajny" highlighted="true"/>
        <WelcomeBoxWithChildren>
            <h2>Dynamic content</h2>
            <p>Dynamic description with any text</p>
            <div>Some text</div>
        </WelcomeBoxWithChildren>


        {/* 1. Do komponentu Title przekaż props o nazwie text, a następnie  z poziomu komponentu zrób obsługę wyświetlania tego tekstu za pomocą propsów.
        2. Do komponentu Title przekaż props o nazwie isRed. Jeśli isRed jest zdefiniowane jakpo true, to tytuł powinien być koloru czerwonego.*/}

    </div>
  );
}

export default Main;
