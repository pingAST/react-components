import './App.css';

import ShopItemFunc from './store-func/js/ShopItemFunc';
import ShopItemClass from './store-class/js/ShopItemClass';

function App() {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    return (
        <>
            {/* Задача №1 Пример использования функционального компонента */}
            <div className="container">
                <div className="background-element"></div>
                <div className="highlight-window">
                    <div className="highlight-window"></div>
                </div>
                <div className="window">
                    <ShopItemFunc item={item}/>
                </div>
            </div>

            {/* Задача №2 Пример использования классового компонента */}
            <div className="container">
                <div className="background-element"></div>
                <div className="highlight-window ">
                    <div className="highlight-overlay1"></div>
                </div>
                <div className="window">
                    <ShopItemClass item={item}/>
                </div>
            </div>

        </>

    );
}

export default App;