import React from 'react';
import classNames from 'classnames';
import '../resources/scss/Button.scss';

//사이즈 값은 총 3가지 값으로 구성
//size값: large, medium, small로 구성- 기본값은 medium으로 설정
//color props: darkblue, orange, brightorange 가져옴

function Button({ children, size, color, outline, fullWidth}) {
    return <button className={classNames('Button', size, color, {
        outline,
        fullWidth
     })}>{children}</button>;
}

Button.defaultProps = {
    size: 'medium',
    color: 'indigo' //INDIGO 7
};

export default Button;

