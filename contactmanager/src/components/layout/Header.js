import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="!#" className="navbar-brand">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASsSURBVGhD7ZlrTFtlGMcx8YOJxn3SJWov9AqnPQUpDJBLBwzGHTqg3FY2x2UtlFrAcRmubBQaVgTG6hyauDi3jM1FWWbU+FkTo18WjGQuMc4lxplpBlTLGAiPPext2blAIOeckmH/yT9t3jx5n+eX9/Tf9pywkEIKKaQ1JZWqBKJwlVkoxvp8rwNc2renXRiuKhGJRM+gdrzoKUyh6Y9Q4HPNOXu8w/uLYdSo59QnKwqWipOSZpUy/C+xWK1DfblVhEJ9LCNml/e3AQvMnW7l1V+2GCFCrvGKRFg0as+NJBLtDoUcn5s6YWJszIc/qC1bViujv0MjcCOxWLU3My7Bw9SQL3tOtYBcis/LZLLn0RjsJBCrakQS7HpydOy8q7IQ7g/bGBvz4XhcOyOQRqrQKOwkDMdKfWkynhaza+7dg/tg9lTwQBI12ulXwnEcjcJeonCs6lBG2jS10S/ORug3FKzAXTxcDn2G/A37U0sVaS/CU8dNYCrIhSJd2orVmHZRKMVj0BjstRbIgwvdsOwZh+W5jzfts0MWuD1oDez1fXcd5GZkw+TX38DCH7+vuHyfYUEsjhShMdhJJMau+76sgDCmiIJ7jzV/+LmTNuCS9wq43e3QZLOCqdkKnV1NcP/ueVrdxNVjMPn26l5lmVlw9+bNAIQfRCLBhGgU9lrrRG6MvUkb8Py5bujqOwsj575YsWtsAmyth2l1VJDy3EISRFBB3LZq2oBt7dYAhN9Ntk6YvXeBVEcF2V+s5xfEH78pDPHLCHKkmRHEs9Ug68UvE8j4xR7oOHE6AOF856oPzkSro4LU6Ev4BSG0mUtr8e8rcKi+BorKXofi8noo1Bvg9q0xWh0VJN+XWO7BEZJzMvMWtwzE4bBCz+CHgRNxjV2DBnMdLHguk+qoILWlBn5PZL34pYL89MMZaGzpCkD4fXz4I3h/rJNUG3QQQhs9EafTBiffm6CBELa2WEi1VBBzZdXWgThqS2B+5lJguPZOevT6bbK2wYPp1drRYQv86l7dq7GKZ5D14vfHXhOcOXIA3O2P3FVfAQOttYw+aqqGkTZjoPYrF/kPGu8gwfr1W2eooKVWSlL6vzKZSopGYa+1Li0ubas5wO+JENoWIOvFL5feNifSUVcbAtmQ1otfLt1sNILT3ktyYrxuSS6PehmNwk7Bit+jDQ1rnIh2BxqFvYJxadlNphDIhhSs+O0xb5MT6bdatgdIW3UVuO12kvOy8h9yBhKs+B01FtPWiFumnIE8il/VJb7jlwkkVv3q7AsY9hwahb2EEiw9Oz5xhtqIS1NB/hx6A1SKKA8agRvt3Kl5VinD/7nlMJOacWkqyFB10VIMFjOORuBOMhluS4mO8xJ34B9vyJUne+oD7y+bK5cjlfiMQKB8CbXnVgqFukMpx70H9+z29JblLVVmZkPB7r0rrsvOYXx8sBl363MWMmMTZlXKqDucPhdhkkSiedH34TcKxFhHakbFnQ7HJ0A47rX8KWKNjX0x30I85gvT6Z5G7YKj9Jyab/0gSWml19Dyk6fkNMONxFT9ZHqW8eeEVP1naPnJE6ZJdhFfWJLIeDkepXsLLYf0P1dY2H/OwS+7dpqT9AAAAABJRU5ErkJggg==" />
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Добавить контакт
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> О нас
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'Contact Manager'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
