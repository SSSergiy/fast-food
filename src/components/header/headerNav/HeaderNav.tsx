const menu = ['Доставка і оплата', 'Про нас', 'Блог', 'Купон', 'Акції', 'Відгуки', 'Навчання']


const HeaderNav = () => {
    return (<div>
        <ul>
            {menu.map((item:string, index:number) => (
            <li key={index}>
                {item}
            </li>
            ))}
        </ul>
    </div>)
};
export default HeaderNav;